import express, { RequestHandler } from 'express';
import bodyParser from 'body-parser';
import carsRoutes from './routes/cars';

const app = express();
app.use(bodyParser.json());
app.use('/', carsRoutes)

app.listen(8080);
