import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import carsRoutes from './routes/cars';
import { client as mongoClient } from './database/index';

const app = express();

app.use(bodyParser.json());

// ALLOW CORS:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/cars', carsRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // These Errors are the ones,
    // which will be thrown by Controllers with "throw new Error()"
    res.status(500).json({ message: err.message });
});

mongoClient.connect(err => {
    if (!!err) {
        console.log(err);
        throw err;
    }
    app.listen(8080);
    // console.log(mongoClient);
})
