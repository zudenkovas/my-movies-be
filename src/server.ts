import express from 'express';

import movieRoutes from './app/routes/movie.routes';

const app = express();

app.use(movieRoutes.path, movieRoutes.router);

app.listen(3000, () => {
    console.log('The application is started');
})
