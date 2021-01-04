import { RequestHandler, Request, Response } from 'express';
import Car from '../models/car';

// const FAKE_CARS_DB: Car[] = [
//     { name: 'BMW E92', power: 250, id: "1" },
//     { name: 'Mercedes-Benz C63', power: 450, id: "2" },
//     { name: 'Audi RS6', power: 600, id: "3" },
// ]

type inputCar = { name: string; power: number; };

type resType = { message: string; car: Car; };

export const addCar: RequestHandler<null, resType, inputCar> = (req, res) => {
    const { name, power } = req.body;
    const car = new Car(name, power);
    car.save()
        .then(result => {
            console.log(result);
            // res.status(201).json({ message: 'Car successfully added!', car });
        })
        .catch(err => {
            console.log(err);
        })
}

// export const getCars: RequestHandler<null, { cars: Car[] }> = (req, res) => {
//     res.status(200).json({ cars: FAKE_CARS_DB })
// }

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





/**
The following out-commented request handlers (getCar(), updateCar() and deleteCar()) are my old way of handling CRUD on /:carId Route Requests. Because of the "carExists" redundancy,
I commented the followings out and used Switch-Case statement in the function {@link handleCarRequests()}
*/

// export const getCar: RequestHandler<{ carId: string }> = (req, res) => {
//     const { carId } = req.params;
//     const index = FAKE_CARS_DB.findIndex(car => car.id === carId);
    
//     const carExists = index >= 0;
//     if (!carExists) {
//         throw new Error('Car not found!')
//     }

//     const car = FAKE_CARS_DB[index]
//     res.status(200).json({ car })
// }

// export const updateCar: RequestHandler<{ carId: string }, resType> = (req, res) => {
//     const { carId } = req.params;
//     const index = FAKE_CARS_DB.findIndex(car => car.id === carId);
    
//     const carExists = index >= 0;
//     if (!carExists) {
//         throw new Error('Car not found!')
//     }
// }

// export const deleteCar: RequestHandler = (req, res) => {
//     const { carId } = req.params;
//     const index = FAKE_CARS_DB.findIndex(car => car.id === carId);
    
//     const carExists = index >= 0;
//     if (!carExists) {
//         throw new Error('Car not found!')
//     }

//     const car = FAKE_CARS_DB[index];
//     FAKE_CARS_DB.splice(index, 1);
//     res.status(200).json({ message: 'Car successfully removed!', deletedCar: car, cars: FAKE_CARS_DB });
// }
