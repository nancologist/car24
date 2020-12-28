import { Router } from 'express';
import { getCars } from '../controllers/cars';

const router = Router();

// router.post('/add-car', );

router.get('/cars', getCars);

// router.patch('/cars/:carId', )

// router.delete('/cars/:carId', )

export default router;
