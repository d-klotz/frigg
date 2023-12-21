# Exploring the Backend

## Backend Overview <a href="#backend-overview" id="backend-overview"></a>

The backend is built around the serverless.com framework and written in [node.js](https://nodejs.org/en/). When you run `npm start`, it runs the command to use the `serverless-offline` node module which allows us to simulate a serverless environment locally and not in the cloud.

All data is handled with [mongodb](https://www.mongodb.com/) and [mongoose](https://github.com/Automattic/mongoose).

Critical to note is that this supports basic functionality (API => function invocation, or schedule => function invocation), it does not support all events that you may be relying on to power your integrations. In other words, you can run Authentication and Configuration, but the entirety of your Frigg applications' backend will not run using this command.For that, see "Running Frigg Locally."

## How it Works <a href="#how-it-works" id="how-it-works"></a>

As you might have noticed, you use both a [serverless](https://aws.amazon.com/serverless/) instance and a client side react app to access the Frigg API modules. The flow looks like this:

<figure><img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzondwGQq6H1gpRlnSp4L%2Fuploads%2Fq59BF3LOV1TxJsfgRHmw%2FScreen%20Shot%202022-04-11%20at%2010.52.07%20AM.png?alt=media&#x26;token=da6c855d-1a14-4a9c-b5f8-0897fb9bc486" alt=""><figcaption></figcaption></figure>

## Reading the Code <a href="#reading-the-code" id="reading-the-code"></a>

To start with, you need to understand some core concepts. Let's navigate to the `/backend` folder and take a look around! These topics will get you started but feel free to read the [API Reference](https://app.gitbook.com/o/-MjPmpCmgcqLo6KB0kgd/s/zondwGQq6H1gpRlnSp4L/\~/changes/110/reference/api-reference).

#### ./src/configs <a href="#.-src-configs" id=".-src-configs"></a>

This can be found in two places right now. `.env` and `src/configs`

#### ./src/handlers <a href="#.-src-handlers" id=".-src-handlers"></a>

Broadly speaking, handlers are the entry point for any serverless function. Every deploy tool and cloud provider is slightly different, but the gist is that they all package up the function code and each function has one signature/entry point. Check out [the serverless docs](https://www.serverless.com/framework/docs/providers/aws/guide/functions) for more information.&#x20;

#### ./src/managers <a href="#.-src-managers" id=".-src-managers"></a>

This is where most of the business logic will be stored and all data records will be created.

The "managers" that we care about are in two buckets:

1. &#x20;Entity Managers, or "classes whose sole responsibility is to handle communication with a specific App/API, including storing and refreshing any credentials in the connected DB"&#x20;
2. Integration Managers, or "classes whose sole responsibility is to facilitate the lifecycle and ongoing logic of a given Integration type and specific record."





#### ./src/models <a href="#.-src-models" id=".-src-models"></a>

These are the mongoose model definitions.

#### ./src/routers <a href="#.-src-routers" id=".-src-routers"></a>

This is how you set up routes with serverless that are referenced in `serverless.yml`.

## Using the Frigg Backend on its Own&#x20;

In many cases you may want to create a Frigg application where you do not need the frontend. This application is explained in this section of the docs: [Use the Frigg Backend Only](exploring-the-backend-1.md#using-the-frigg-backend-on-its-own)
