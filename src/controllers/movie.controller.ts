import express from 'express';

import { loadMovies } from '../services/movie.service';

const getMovies = async (_req: express.Request, res: express.Response): Promise<void> => {
  await loadMovies(); // Store loaded movies to the const
  res.json([]); // Remove empty array with loaded movies
};

export { getMovies };
