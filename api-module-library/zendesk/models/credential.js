const mongoose = require('mongoose');
const { Credential: Parent } = require('@friggframework/module-plugin');

const schema = new mongoose.Schema({
    clientKey: {
        type: String,
        trim: true,
        unique: true,
    },
    secret: {
        type: String,
        trim: true,
        lhEncrypt: true,
    },
});

const name = 'ZendeskCredential';
const Credential =
    Parent.discriminators?.[name] || Parent.discriminator(name, schema);
module.exports = { Credential };
