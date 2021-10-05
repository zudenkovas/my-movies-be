import express from 'express';

import { loadGenres } from '../services/genre.service';

const getGenres = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  try {
    const genres = await loadGenres();
    res.json(genres);
  } catch (err) {
    next(err);
  }
};

export { getGenres };
