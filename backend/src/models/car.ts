import { ObjectId } from 'mongodb';
import { getDB } from '../database/index'

export default class {
    private _id: ObjectId | null; // It must be _id (for MongoDB)
    public name: string;
    public power: number;

    constructor(name: string, power: number, id?: string) {
        this.name = name;
        this.power = power;
        this._id = id ? new ObjectId(id) : null;
    }

    save() {
        const db = getDB();
        return db.collection('cars').insertOne(this);
    }

    static getAll() {
        const db = getDB();
        return db.collection('cars').find().toArray()
            .then(cars => {
                console.log(cars);
                return cars;
            })
            .catch(err => {
                console.log(err);
            });
    }
}
