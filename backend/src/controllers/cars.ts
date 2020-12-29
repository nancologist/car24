import { RequestHandler } from 'express';
import Car from '../models/car';

const FAKE_CARS_DB: Car[] = [
    { name: 'BMW E92', power: 250, id: "1" },
    { name: 'Mercedes-Benz C63', power: 450, id: "2" },
    { name: 'Audi RS6', power: 600, id: "3" },
]

type inputCar = { name: string; power: number; };

type resType = { message: string; addedCar: Car; };

export const addCar: RequestHandler<null, resType, inputCar> = (req, res) => {
    const { name, power } = req.body;
    const car = new Car(name, power);
    FAKE_CARS_DB.push(car);

    // res.status(302).redirect('/cars');
    res.status(201).json({
        message: 'Car successfully added!',
        addedCar: car
    })
}

export const getCars: RequestHandler<null, { cars: Car[] }> = (req, res) => {
    res.status(200).json({ cars: FAKE_CARS_DB })
}

export const getCar: RequestHandler<{ carId: string }> = (req, res) => {
    const { carId } = req.params;
    const index = FAKE_CARS_DB.findIndex(car => car.id === carId);
    
    const carExists = index >= 0;
    if (!carExists) {
        throw new Error('Car not found!')
    }

    const car = FAKE_CARS_DB[index]
    res.status(200).json({ car })
}

// export const updateCar: RequestHandler<{ carId: string }, resType> = (req, res) => {
//     const { carId } = req.params;
//     const index = FAKE_CARS_DB.findIndex(car => car.id === carId);
//     const carExists = index >= 0;
    
    // if (!carExists) {
    //     throw new Error('Car not found!')
    // }


// }
