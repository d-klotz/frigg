const { OAuth2Requester } = require('@friggframework/module-plugin');
const { get } = require('@friggframework/assertions');

class Api extends OAuth2Requester {
    constructor(params) {
        super(params);

        this.subdomain = this.getParam(params, 'subdomain', null);

        this.baseUrl = `https://${this.subdomain}.zendesk.com`;

        // Zendesk app_id, name client_id for consistency?
        this.client_id = process.env.ZENDESK_CLIENT_ID;
        this.client_secret = process.env.ZENDESK_CLIENT_SECRET;
        this.redirect_uri = `${process.env.REDIRECT_URI}/zendesk?account=${this.subdomain}`;

        this.URLs = {
            organization: '/api/v2/organizations',
        };

        this.authorizationUri = `${this.baseUrl}/oauth/authorizations/new?response_type=code&client_id=${this.client_id}&client_secret${this.client_secret}&redirect_uri=${this.redirect_uri}&scope=read`;

        this.tokenUri = `${this.baseUrl}/oauth/tokens`;

        this.access_token = get(params, 'access_token', null);
    }

    async addAuthHeaders(headers) {
        if (this.access_token) {
            headers.Authorization = `Bearer ${this.access_token}`;
        }
        return headers;
    }

    async getAuthUri() {
        return this.authorizationUri;
    }

    async getTokenFromCode(code) {
        const options = {
            url: this.tokenUri,
            body: {
                grant_type: 'authorization_code',
                client_id: this.client_id,
                client_secret: this.client_secret,
                redirect_uri: this.redirectUri,
                scope: 'read',
                code,
            },
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        const response = await this._post(options);
        return response;
    }

    setSubdomain(subdomain) {
        this.subdomain = subdomain;
        this.baseUrl = `https://${this.subdomain}.zendesk.com`;
        this.tokenUri = `${this.baseUrl}/oauth/token`;
        this.redirect_uri = `${process.env.REDIRECT_URI}/zendesk?account=${this.subdomain}`;
    }

    async authTest() {
        const options = {
            url: this.baseUrl + this.URLs.organization,
            body: null,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        const response = await this._get(options);
        return response;
    }
}

module.exports = { Api };
