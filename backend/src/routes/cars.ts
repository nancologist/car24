import { Router } from 'express';
import { getCars, addCar, getCar, updateCar } from '../controllers/cars';

const router = Router();

router.post('/cars', addCar);

router.get('/cars', getCars);

router.get('/cars/:carId', getCar)

router.patch('/cars/:carId', updateCar)

// router.delete('/cars/:carId', )

export default router;
