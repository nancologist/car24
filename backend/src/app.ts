import express, { RequestHandler } from 'express';
import bodyParser from 'body-parser';

const FAKE_CARS_DB = [
    { name: 'BMW E92' },
    { name: 'Mercedes-Benz C63' },
    { name: 'Audi RS6' },
]

const app = express();
app.use(bodyParser.json());
app.use('/cars', (req, res, next) => {
    res.status(200).json({ FAKE_CARS_DB })
})

app.listen(8080);
