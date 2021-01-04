import { Router } from 'express';
import { addCar } from '../controllers/cars';

const router = Router();

router.post('/', addCar);

// router.get('/', getCars);

// router.all('/:carId', handleCarRUD)

// router.patch('/:carId', updateCar)

// router.delete('/:carId', deleteCar)

export default router;
