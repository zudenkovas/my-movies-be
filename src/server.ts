import express from 'express';

import movieRoutes from './app/routes/movie.routes';

const urlPrefix = '/api';
const app = express();

app.use(urlPrefix + movieRoutes.path, movieRoutes.router);

app.use((err: any, _req: express.Request, _res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    next(err);
});

app.use((err: any, _req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({ error: err.errors || err.message || 'Unknown Error' });
});

app.use((_req: express.Request, res: express.Response) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(3000, () => {
    console.log('The application is started');
})
