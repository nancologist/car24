import { RequestHandler, Request, Response } from 'express';
import Car from '../models/car';

type inputCar = { name: string; power: number; };

type resType = { message: string; car: Car; };

export const addCar: RequestHandler<null, resType, inputCar> = (req, res) => {
    const { name, power } = req.body;
    const car = new Car(name, power);
    car.save()
        .then(result => {
            console.log(result);
            res.status(201).json({ message: 'Car successfully added!', car });
        })
        .catch(err => {
            console.log(err);
        })
}

export const getCars: RequestHandler<null, { cars: Car[] }> = (req, res) => {
    Car.getAll()
        .then((cars) => {
            if (cars) {
                res.json({ cars })
            }
        })
        .catch(err => {
            console.log(err);
        })
}

// RUD = Read, Update, Delete
// export const handleCarRUD: RequestHandler<{ carId: string }> = (req, res) => {
//     const { carId } = req.params;
//     const index = FAKE_CARS_DB.findIndex(car => car.id === carId);
    
//     const carExists = index >= 0;
//     if (!carExists) {
//         throw new Error('Car not found!')
//     }

//     switch (req.method) {
//         case 'GET':
//             const car = FAKE_CARS_DB[index]
//             res.status(200).json({ car })
//             break;

//         case 'PATCH':
//             updateCar(req, res, index);
//             break;

//         case 'DELETE':
//             deleteCar(req, res, index);
//             break;
    
//         default:
//             throw new Error('INVALID REQUEST');
//     }
// }

// function updateCar (req: Request, res: Response, index: number) {
//     const { name, power } = req.body;
//     const car = FAKE_CARS_DB[index]
//     if (!name && !power) throw new Error('INVALID REQUEST BODY');
//     if(!!name) car.name = name;
//     if(!!power) car.power = power;
//     res.status(201).json({ message: 'Car details updated!', car });
// }

// function deleteCar (req: Request, res: Response, index: number) {
//     const car = FAKE_CARS_DB[index];
//     FAKE_CARS_DB.splice(index, 1);
//     res.status(200).json({ message: 'Car successfully removed!', deletedCar: car, cars: FAKE_CARS_DB });
// }
