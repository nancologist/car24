import { RequestHandler } from 'express';
import Car from '../models/car';

const FAKE_CARS_DB: Car[] = [
    { name: 'BMW E92', power: 250 },
    { name: 'Mercedes-Benz C63', power: 450 },
    { name: 'Audi RS6', power: 600 },
]

export const addCar: RequestHandler = (req, res, next) => {

}

export const getCars: RequestHandler<null, { Cars: Car[] }> = (req, res, next) => {
    res.status(200).json({ Cars: FAKE_CARS_DB })
}
