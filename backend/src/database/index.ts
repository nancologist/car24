import { MongoClient } from 'mongodb';

const MONGO_USER1 = {
    name: 'nancologist',
    pwd: '1BgmNOzX8pWh4Ryf'
}
const DB_NAME = 'test4';

const MONGO_URI = `mongodb+srv://${MONGO_USER1.name}:${MONGO_USER1.pwd}@cluster0.sgb6o.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

export const client = new MongoClient(MONGO_URI, { useNewUrlParser: true });

// ************** RECOMMENDED BY MONGODB: **************
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://nancologist:<password>@cluster0.sgb6o.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
