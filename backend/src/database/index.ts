import { MongoClient } from 'mongodb';

const MONGO_USER1 = {
    name: 'nancologist',
    pwd: '1BgmNOzX8pWh4Ryf'
}
const DB_NAME = 'car24';

const MONGO_URI = `mongodb+srv://${MONGO_USER1.name}:${MONGO_USER1.pwd}@cluster0.sgb6o.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

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
