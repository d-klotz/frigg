# Exploring the App

Note: Running `npm start` at the root of your Frigg application will run `npm start` on both the `/backend` and `/frontend` directories. (Tip: You can see this in package.json)

## **Frontend Overview**

The frontend is totally optional. The benefit of this front end is to allow easy application configuration and authorization. However, you can simply use the backend to integrate frigg into your existing application.

The frontend is a cookie cutter React application built with [create-react-app](https://github.com/facebook/create-react-app) and [Tailwind CSS](https://tailwindcss.com/) and [Tailwind UI](https://tailwindui.com/). It also leverages the Frigg React component library for the Integration Management page. This is the core piece to pay attention to for your own application. You can read more about Frontend options and concepts with [Frigg here.](../../../reference/architecture.md)

We provide a very lightweight/basic user login flow and dashboard. Go ahead and try logging in or creating an account.

![Frigg-login-page](https://user-images.githubusercontent.com/3011407/210785998-457ab95f-7b7c-4f02-892b-57477c75708a.png)

Once you log in successfully, you will see a page that shows all installed integrations.

<figure><img src="../../../.gitbook/assets/screencapture-demo-friggframework-org-integrations-2022.png" alt=""><figcaption></figcaption></figure>

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
