import express from 'express';

// Import movie controller endpoint: import { getMovies } from '../controllers/movie.controller';

const router = express.Router();

// Configure get movies endpoint mapping: router.route('/').get(getMovies);

export default router;
