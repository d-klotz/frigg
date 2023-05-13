const { get } = require('@friggframework/assertions');

class Delegate {
    constructor(params) {
        this.delegate = get(params, 'delegate', this);
        this.delegateTypes = get(params, 'events', []);
    }

    async notify(delegateString, object = null) {
        if (!this.delegateTypes.includes(delegateString)) {
            throw new Error(
                `delegateString:${delegateString} is not defined in delegateTypes`
            );
        }
        if (this.delegate) {
            return this.delegate.receiveNotification(
                this,
                delegateString,
                object
            );
        }
    }

    async receiveNotification(notifier, delegateString, object = null) {
        // ...
    }
}

module.exports = { Delegate };
