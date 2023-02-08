# Exploring the Backend

## Backend Overview

The backend is built around the serverless.com framework and written in [node.js](https://nodejs.org/en/). When you run `npm start`, it runs the command to use the `serverless-offline` node module which allows us to simulate a serverless environment locally and not in the cloud.

All data is handled with [mongodb](https://www.mongodb.com/) and [mongoose](https://github.com/Automattic/mongoose).

Critical to note is that this supports basic functionality (API => function invocation, or schedule => function invocation), it does not support all events that you may be relying on to power your integrations. In other words, you can run Authentication and Configuration, but the entirety of your Frigg applications' backend will not run using this command.&#x20;

For that, see "Running Frigg Locally."

### How it Works

As you might have noticed, you use both a [serverless](https://aws.amazon.com/serverless/) instance and a client side react app to access the Frigg API modules. The flow looks like this:

<figure><img src="../../../.gitbook/assets/Screen Shot 2022-04-11 at 10.52.07 AM.png" alt=""><figcaption></figcaption></figure>

## Reading the Code

To start with, you need to understand some core concepts. Let's navigate to the `/backend` folder and take a look around! These topics will get you started but feel free to read the [API Reference](../../../reference/api-reference.md).

### ./src/configs

This can be found in two places right now. `.env` and `src/configs`

### ./src/handlers

These are services that enable managers

### ./src/managers

This is where most of the business logic will be stored and all data records will be created.

### ./src/models

These are the mongoose model definitions.

### ./src/routers

This is how you set up routes with serverless that are referenced in `serverless.yml`.
