import express from 'express';

import { getPageNumber } from './movie.controller';
import * as personalMovieService from '../services/personal-movie.service';

const getPersonalMovies = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  try {
    res.json(await personalMovieService.getPersonalMovies(req.currentUserEmail, getPageNumber(req)));
  } catch (err) {
    next(err);
  }
};

const savePersonalMovie = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  try {
    const movie: Movie = {
      ...req.body,
      email: req.currentUserEmail,
    };

    res.json(await personalMovieService.savePersonalMovie(movie));
  } catch (err) {
    next(err);
  }
};

const deletePersonalMovie = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  try {
    const result = await personalMovieService.deletePersonalMovie(req.params.id, req.currentUserEmail);
    res.json({ success: result });
  } catch (err) {
    next(err);
  }
};

export { getPersonalMovies, savePersonalMovie, deletePersonalMovie };
