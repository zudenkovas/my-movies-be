import express, { ErrorRequestHandler, json } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import mongoose from 'mongoose';
import sanitize from 'express-mongo-sanitize';

import { CORS } from './commons';
import healthRoutes from './routes/health.routes';
import genreRoutes from './routes/genre.routes';
import movieRoutes from './routes/movie.routes';
import personalMovieRoutes from './routes/personal-movie.routes';
import securityRoutes from './routes/security.routes';
import sortOptionRoutes from './routes/sort-option.routes';

dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const connectionOptions: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const mongoUri = process.env.MONGO_URL || 'UNDEFINED';
mongoose.connect(mongoUri, connectionOptions);

const app = express();

app.use(helmet());
app.use(json());
app.use(CORS);
app.use(sanitize());

app.use('/', securityRoutes);
app.use('/health', healthRoutes);
app.use('/genres', genreRoutes);
app.use('/movies', movieRoutes);
app.use('/personal-movies', personalMovieRoutes);
app.use('/sort-options', sortOptionRoutes);

const errorLogger: ErrorRequestHandler = (err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
};
app.use(errorLogger);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const status = err.errors ? 400 : 500;
  res.status(status).json({ error: err.errors || err.message || 'Unknown Error' });
};
app.use(errorHandler);

app.use((_req: express.Request, res: express.Response) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(3001, () => {
  console.log('Aapplication is started');
});

export default app;
