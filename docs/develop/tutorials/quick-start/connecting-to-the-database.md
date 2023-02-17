# Exploring the Database

## The Frigg Data Model

The data model supports the front end and backend of a Frigg application created by create-frigg-app.

![Frigg Data Model](<../../../.gitbook/assets/frigg data model.png>)

## User Model

This model is used to log into the front end of a Frigg application.

## Integration Model

The integration model is used to save configuration for each integration when configured by the front end.

## Entity Model

This model is used when a user has many configurations attached to their user and you need to look up a user in the database based on an `externalId`. For instance, if you have configured Salesforce, the `externalId` would be the user's Salesforce id.

## Credential Model

Once a user authenticates to a third party service, we store the oauth credentials in this table. Frigg handles this for us and performs tasks like refreshing stale access tokens automatically for you!

## Tokens

The Token model is not as important as our other models but we will discuss it here to provide as much information as possible. This was a more or less custom implementation of an auth token for frontend use. It's a session token that's an encoded json object (so, stores information).&#x20;

You can see how the static methods on the token model are relevant to effectively create a session/auth token flow. The code can be seen [here](https://github.com/friggframework/create-frigg-app/blob/main/packages/cfa-template/template/backend/src/models/Token.js).

