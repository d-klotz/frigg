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

Instead of the standard [oauth 2.0 flow](https://oauth.net/2/), some services provide a token for authentication. This is where these tokens are stored and linked to a user.

