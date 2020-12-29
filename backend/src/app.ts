import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import carsRoutes from './routes/cars';

const app = express();

app.use(bodyParser.json());

app.use('/cars', carsRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // These Errors are the ones,
    // which will be thrown by Controllers with "throw new Error()"
    res.status(500).json({ message: err.message });
});

app.listen(8080);
