import { RequestHandler, Request, Response } from 'express';
import Car from '../models/car';

type inputCar = { name: string; power: number; };

type resType = { message: string; car: Car; };

export const addCar: RequestHandler<null, resType | { errMsg: string }, inputCar> = (req, res) => {
    const { name, power } = req.body;
    const car = new Car(name, power);
    car.save()
        .then(result => {
            console.log(result);
            res.status(201).json({ message: 'Car successfully added!', car });
        })
        .catch(err => {
            res.json({ errMsg: err });
        })
}

export const getCars: RequestHandler<null, { cars: Car[] } | { errMsg: string }> = (req, res) => {
    Car.getAll()
        .then((cars) => {
            if (cars) {
                res.json({ cars })
            }
        })
        .catch(err => {
            res.json({ errMsg: err });
        })
}

// RUD = Read, Update, Delete
export const handleCarRUD: RequestHandler<{ carId: string }> = (req, res) => {
    const { carId } = req.params;

    switch (req.method) {
        case 'GET':
            Car.findById(carId)
                .then(car => {
                    res.json({ car });
                })
                .catch(err => {
                    res.status(404).json({ msg: err });
                });
            break;

        case 'PATCH':
            const { name, power } = req.body;
            Car.update(carId, name, power)
                .then(updatedCar => {
                    res.json({ updatedCar });
                })
                .catch(err => {
                    res.status(404).json({ msg: err });
                });
            break;

//         case 'DELETE':
//             deleteCar(req, res, index);
//             break;
    
        default:
            throw new Error('INVALID REQUEST');
    }
}
