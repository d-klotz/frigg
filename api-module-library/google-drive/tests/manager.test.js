require('dotenv').config();
const mongoose = require('mongoose');
const Manager = require('../manager');
const { connectToDatabase } = require('@friggframework/database/mongo');
const Authenticator = require('@friggframework/test-environment/Authenticator');

describe('Google Drive Manager Tests', () => {
    let manager, authUrl;
    jest.setTimeout(100000);

    beforeAll(async () => {
        const conn = mongoose.connection;
        console.log(process.env.MONGO_URI);
        manager = await Manager.getInstance({
            userId: new mongoose.Types.ObjectId(),
        });
        conn.modelNames().map(async (model) => {
            console.log(model);
            await conn.models[model].createIndexes();
        });
    });

    afterAll(async () => {
        await Manager.Credential.deleteMany();
        await Manager.Entity.deleteMany();
        await mongoose.disconnect();
    });

    describe('getAuthorizationRequirements() test', () => {
        it('should return auth requirements', async () => {
            const requirements = manager.getAuthorizationRequirements();
            expect(requirements).toBeDefined();
            expect(requirements.type).toEqual('oauth2');
            authUrl = requirements.url;
        });
    });

    describe('processAuthorizationCallback() test', () => {
        beforeAll(async () => {
            mongoose.set('strictQuery', false);
            await connectToDatabase();

            console.log(process.env.MONGO_URI);
            manager = await Manager.getInstance({
                userId: new mongoose.Types.ObjectId(),
            });
        });
        it('should return an entity_id, credential_id, and type for successful auth', async () => {
            const response = await Authenticator.oauth2(authUrl);
            const baseArr = response.base.split('/');
            response.entityType = baseArr[baseArr.length - 1];
            delete response.base;

            const res = await manager.processAuthorizationCallback({
                data: {
                    code: response.data.code,
                },
            });
            expect(res).toBeDefined();
            expect(res.entity_id).toBeDefined();
            expect(res.credential_id).toBeDefined();
        });

        it('Test credential retrieval and manager instantiation', async () => {
            const newManager = await Manager.getInstance({
                userId: manager.userId,
                entityId: manager.entity.id,
            });
            expect(newManager).toBeDefined();
            expect(newManager.entity).toBeDefined();
            expect(newManager.credential).toBeDefined();
        });
    });
});
