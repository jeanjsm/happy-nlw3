import express, { json } from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';
import routes from './routes';
import errorhandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorhandler);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);
