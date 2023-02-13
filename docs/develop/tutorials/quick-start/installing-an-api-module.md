# Installing an Existing API Module

## The Existing Integrations

{% embed url="https://github.com/friggframework/frigg/tree/main/api-module-library" %}

In the above Github repo, you can see all of the api modules that we have worked on so far. This list is ever growing and we hope that you will be inspired to create your own!&#x20;

## How Do I Use an Existing Api Module?

For the following examples, we will use [Hubspot](https://developers.hubspot.com/docs/api/overview) as an example integration we want to install.

### Let's Create a New Frigg Application

```
npm i -g frigg create-frigg-app
npx create-frigg-app my-application
cd my-application/backend
npm install @friggframework/api-module-hubspot
```

{% hint style="info" %}
Don't forget to configure your database connection as described in [this section](../../../api-module-library/module-list/hubspot/configuration.md)
{% endhint %}

Now this does not enable Hubspot out of the box but instead creates a Frigg application and adds a package to our `node_modules` folder. To use this api module in your code, you will have to perform the following steps.

#### 1. Default display override by adding to ConfigManager

If you are using the front end of `create-frigg-app`, you will not be able to view the application for configuration until you change the code.



* Default display override by adding to ConfigManager
* Override or add helper functions by creating a HubSpotManager.js in `/managers/entities`
* Copy over ExampleIntegrationManager.js and corresponding test file
* Good to go!
