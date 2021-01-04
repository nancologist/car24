import { ObjectId } from 'mongodb';
import { getDB } from '../database/index'

export default class {
    private id: ObjectId | null;
    public name: string;
    public power: number;

    constructor(name: string, power: number, id?: string) {
        this.name = name;
        this.power = power;
        this.id = id ? new ObjectId(id) : null;
    }

    save() {
        const db = getDB();
        return db.collection('cars').insertOne(this);
    }
}
