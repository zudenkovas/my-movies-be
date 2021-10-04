import express from 'express';

import { loadMovies } from '../services/movie.service';

const getMovies = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  try {
    const movies = await loadMovies();
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

export { getMovies };
