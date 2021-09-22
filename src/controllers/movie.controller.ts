import express from 'express';

import { loadMovies } from '../services/movie.service';

const getMovies = async (_req: express.Request, res: express.Response): Promise<void> => {
  const movies: Movie[] = await loadMovies();
  res.json(movies);
};

export { getMovies };
