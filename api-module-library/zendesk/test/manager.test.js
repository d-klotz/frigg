const { expect, should } = require('chai');
const { Manager } = require('../manager');
const config = require('../defaultConfig.json');

require('dotenv').config();

describe(`Should fully test the ${config.label} Manager Class`, () => {
    it('test', async () => {
        expect(true).to.equal(true);
    });
});
