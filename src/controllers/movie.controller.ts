import express from 'express';

import * as movieService from '../services/movie.service';

const getPageNumber = (req: express.Request): number => (req.query.page ? parseInt(req.query.page as string) || 1 : 1);

const getMovies = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  const page = getPageNumber(req);

  try {
    if (req.query.genres || req.query.sort) {
      res.json(await movieService.searchMovies(page, req.query.genres as string, req.query.sort as string));
    } else if (req.query.title) {
      res.json(await movieService.searchMoviesByTitle(page, req.query.title as string));
    } else {
      res.json(await movieService.getMovies(page));
    }
  } catch (err) {
    next(err);
  }
};

const getMovie = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  try {
    const movie = await movieService.getMovie(parseInt(req.params.movieId));
    res.json(movie);
  } catch (err) {
    next(err);
  }
};

export { getMovies, getMovie, getPageNumber };
