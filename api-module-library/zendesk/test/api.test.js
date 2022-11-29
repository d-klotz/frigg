const { expect, should } = require('chai');
const { Api } = require('../api');
const config = require('../defaultConfig.json');

require('dotenv').config();

describe(`Should fully test the ${config.label} API Class`, () => {
    it('test', async () => {
        expect(true).to.equal(true);
    });
});
