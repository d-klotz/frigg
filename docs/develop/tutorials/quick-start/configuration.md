# Configuration

Here are all the things you need to do in order for your frigg application to run.

## Database

Frigg relies on a MongoDB Database. You can [install MongoDB](https://www.mongodb.com/docs/manual/installation/) locally or choose to create a mongo database in the cloud. For the purposes of this tutorial, we will be creating one in the cloud with [MongoDB Atlas](https://www.mongodb.com/atlas/database). (It's free and fast!)

#### Setting up a MongoDB with Atlas in the Cloud

* Follow [these instructions](https://www.mongodb.com/basics/create-database) to create a MongoDB instance. Then you will need to set the DB password in the MongoDB Atlas website like [this](https://www.mongodb.com/docs/atlas/security-add-mongodb-users/).
* You'll need to create a db admin user and you'll want your connection string. More information on how to do this can be found [here](connecting-to-the-database.md).
* Then copy and paste your MongoDB Atlas url to the `backend/src/configs/dev.json` file in your new create-frigg-app application. For example:

```
{
    "MONGO_URI": "mongodb+srv://<mongo_username>:<mongo_password>@cluster0.xxx.mongodb.net/?retryWrites=true&w=majority",
    "REDIRECT_URI": "https://localhost:3000/redirect"
}
```

