---
description: >-
  This is where you can find some common problems others have gone through and
  how to debug them.
---

# Debugging

Everything in this list will be worked on eventually to make the onboarding flow easier for new Frigg developers. In the meantime, if you have issues, take a look at this list of common problems new Frigg developers encounter.

## Login failed. Incorrect Username of Password

When you first launch a new create-frigg-app, if things are not set up properly, you will see the following message in the front end when clicking on "Log in" or "Create Account" from the login page [http://localhost:3000/](http://localhost:3000/)

![](<../.gitbook/assets/Screen Shot 2023-02-13 at 9.49.26 AM.png>)

This is happening because your database is not configured properly.

Check your configuration file here: `my-create-frigg-app/backend/src/configs/dev.json`

In this file, you need to set up mongo properly as mentioned in the [Configuration](../api-module-library/module-list/rollworks/configuration.md) section of these docs.

You can debug to see if this is working by running these commands in terminal.

```
mongosh "mongodb+srv://myusername:mypassword@cluster0.0ne734b.mongodb.net/?retryWrites=true&w=majority"
```

If authentication is successful, you will be able to list your databases like this:

```
show databases;
```

The second reason that this will happen is that your configuration for the application is not correct. You will see this if you check the front end's developer tools and see this console error:

<figure><img src="../.gitbook/assets/Screen Shot 2023-02-13 at 9.57.02 AM.png" alt=""><figcaption></figcaption></figure>

This is because you need to make your own `.env` file in `/frontend` based on `.env.example` Navigate to the root of your project and run:

```
cp frontend/.env.example frontend/.env
```

## Login Failed: Duplicate User

{% embed url="https://github.com/friggframework/create-frigg-app/issues/30" %}

{% hint style="info" %}
TLDR: You will have to delete your duplicate users and tokens from your DB manually. We are working on a better way to solve this. Then simply restart your application in terminal  :thumbsup:
{% endhint %}

