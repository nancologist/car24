import { ObjectId } from 'mongodb';
import { getDB } from '../database/index'

class Car {
    private _id: ObjectId | null; // It must be _id (for MongoDB)
    public name: string;
    public power: number;
    public price: number;

    constructor(name: string, power: number, price: number, id?: string) {
        this.name = name;
        this.power = power;
        this.price = price;
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
                return cars;
            })
            .catch(err => {
                return err;
            });
    }

    static findById(id: string): Promise<Car> {
        const db = getDB();
        const objId = new ObjectId(id)

        return db.collection('cars').findOne({ _id: objId })
            .then(car => {
                if (!car) throw new Error('No Car Found!!');
                return car;
            })
            .catch(err => {
                return err;
            });
    }

    static update(id: string, name: string, power: string) {
        const db = getDB();
        const objId = new ObjectId(id)

        return db.collection('cars').findOneAndUpdate(
            { _id: objId },
            { $set: { name, power } },
            { returnOriginal: false }
        )
            .then(({ value: updatedCar}) => {
                if (!updatedCar) {
                    throw new Error('Update Operation Failed!')
                }
                return updatedCar;
            })
            .catch(err => {
                return err;
            });
    }

    static delete(id: string) {
        const db = getDB();
        const objId = new ObjectId(id)

        return db.collection('cars').findOneAndDelete({ _id: objId })
            .then(({ value: deletedCar}) => {
                const deleteFailed = Object.keys(deletedCar).length === 0;
                if (deleteFailed) {
                    throw new Error('Delete Operation Failed!')
                }
                return deletedCar;
            })
            .catch(err => {
                return err;
            });
    }
}

export default Car;
