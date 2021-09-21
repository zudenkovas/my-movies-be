import express from 'express';

const getMovies = (_req: express.Request, res: express.Response): void => {
  res.json([]); // Change empty array into loadMovies function result in movie.service.ts
};

export { getMovies };
