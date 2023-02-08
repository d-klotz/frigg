# Create Frigg App

{% hint style="info" %}
**Note on naming:** we recommend thinking of your Frigg app as a microservice that powers integrations; naming it something like "my-app-integrations" is a good fit
{% endhint %}

## Install all things Frigg!

Let's make a new folder and install a few things. Open your terminal and navigate to a folder you want to work from. Then you can install the dependencies and use the create-frigg-app generator to initialize a frigg application!

```
npm i frigg create-frigg-app
npx create-frigg-app [my-app-integrations]
```

### Create Your Frigg Application

```
cd [my-app-integrations]
npm i
npm run start
```

{% hint style="info" %}
Running `npm start` at the root of your Frigg application will run `npm start` on both the `/backend` and `/frontend` directories. You can see this configuration in package.json
{% endhint %}

Your browser should open to `http://localhost:3000`, and the backend should spin up an API service at `http://localhost:3001/dev/api`
