import express from 'express';

import { loadMovie, loadMovies, searchMovies, searchMoviesByTitle } from '../services/movie.service';

const getMoviesByGenresOrSort = async (
  res: express.Response,
  next: express.NextFunction,
  page: number,
  withGenres?: string,
  sortBy?: string,
): Promise<void> => {
  try {
    res.json(await searchMovies(page, withGenres, sortBy));
  } catch (err) {
    next(err);
  }
};

const getMoviesByTitle = async (
  res: express.Response,
  next: express.NextFunction,
  page: number,
  title: string,
): Promise<void> => {
  try {
    res.json(await searchMoviesByTitle(page, title));
  } catch (err) {
    next(err);
  }
};

const getMoviesPage = async (res: express.Response, next: express.NextFunction, page: number): Promise<void> => {
  try {
    res.json(await loadMovies(page));
  } catch (err) {
    next(err);
  }
};

const getMovies = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  const page = req.query.page ? parseInt(req.query.page as string) || 1 : 1;

  if (req.query.genres || req.query.sort) {
    getMoviesByGenresOrSort(res, next, page, req.query.genres as string, req.query.sort as string);
  } else if (req.query.title) {
    getMoviesByTitle(res, next, page, req.query.title as string);
  } else {
    getMoviesPage(res, next, page);
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
