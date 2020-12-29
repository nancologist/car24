import { RequestHandler } from 'express';
import Car from '../models/car';

const FAKE_CARS_DB: Car[] = [
    { name: 'BMW E92', power: 250, id: "1" },
    { name: 'Mercedes-Benz C63', power: 450, id: "2" },
    { name: 'Audi RS6', power: 600, id: "3" },
]

type inputCar = {
    name: string;
    power: number;
};

export const addCar: RequestHandler<null, { message: string, addedCar: Car }, inputCar> = (req, res, next) => {
    const { name, power } = req.body;
    const car = new Car(name, power);
    FAKE_CARS_DB.push(car);

    // res.status(302).redirect('/cars');
    res.status(201).json({
        message: 'Car successfully added!',
        addedCar: car
    })
}

export const getCars: RequestHandler<null, { Cars: Car[] }> = (req, res, next) => {
    res.status(200).json({ Cars: FAKE_CARS_DB })
}

// export const updateCar: RequestHandler<>
