import { Router } from 'express';
import { addCar, getCars, handleCarRUD } from '../controllers/cars';

const router = Router();

router.post('/', addCar);

router.get('/', getCars);

router.all('/:carId', handleCarRUD)

router.patch('/:carId', handleCarRUD)

router.delete('/:carId', handleCarRUD)

export default router;
