import { Router } from 'express';
import { getCars, addCar, getCar, updateCar, deleteCar } from '../controllers/cars';

const router = Router();

router.post('/', addCar);

router.get('/', getCars);

router.get('/:carId', getCar)

router.patch('/:carId', updateCar)

router.delete('/:carId', deleteCar)

// router.delete('/cars/:carId', )

export default router;
