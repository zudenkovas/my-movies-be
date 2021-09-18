import express, { ErrorRequestHandler } from 'express';
import bodyParser from 'body-parser';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';

import { CORS } from './commons';
import healthRoutes from './routes/health.routes';

const app = express();

app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());
app.use(CORS);

app.use('/health', healthRoutes);

const errorLogger: ErrorRequestHandler = (err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
};
app.use(errorLogger);

const errorHandler: ErrorRequestHandler = (err, _req, res) => {
  res.status(500).json({ error: err.errors || err.message || 'Unknown Error' });
};
app.use(errorHandler);

app.use((_req: express.Request, res: express.Response) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(3000, () => {
  console.log('Aapplication is started');
});

export default app;
