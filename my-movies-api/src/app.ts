import express from 'express';

import movieRoutes from '@/routes/movie.routes';

const app = express();

app.use('/', (_req: any, res: express.Response) => res.json({ message: 'APIs' }));
app.use('/movies', movieRoutes);

app.use((err: any, _req: express.Request, _res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    next(err);
});

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    res.status(500).json({ error: err.errors || err.message || 'Unknown Error' });
});

app.use((_req: express.Request, res: express.Response) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(3000, () => {
    console.log('Aapplication is started');
});

export default app;
