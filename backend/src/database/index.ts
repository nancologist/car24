import { MongoClient } from 'mongodb';

const DB_NAME = 'car24';

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0.sgb6o.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

export const client = new MongoClient(
    MONGO_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

export const getDB = () => {
    if (!!client.db()) {
        return client.db() 
        //client.db() without args returns the DB which we used in MONG_URI, meaning "car24".
    }
    throw 'No Database Found!';
};
