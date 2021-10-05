import express from 'express';

import { loadMovie, loadMovies } from '../services/movie.service';

const getMovies = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const movies = await loadMovies(page);
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const getMovie = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  try {
    const movie = await loadMovie(parseInt(req.params.movieId));
    res.json(movie);
  } catch (err) {
    next(err);
  }
};

export { getMovies, getMovie };
