import express, { ErrorRequestHandler } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { CORS } from './commons';
import healthRoutes from './routes/health.routes';
import genreRoutes from './routes/genre.routes';
import movieRoutes from './routes/movie.routes';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(CORS);

app.use('/health', healthRoutes);
app.use('/genres', genreRoutes);
app.use('/movies', movieRoutes);

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
