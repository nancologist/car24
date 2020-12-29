import { Router } from 'express';
import { getCars, addCar } from '../controllers/cars';

const router = Router();

router.post('/add-car', addCar);

router.get('/cars', getCars);

// router.patch('/cars/:carId', )

// router.delete('/cars/:carId', )

export default router;
