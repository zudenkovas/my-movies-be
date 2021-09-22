import express from 'express';

const getMovies = async (_req: express.Request, res: express.Response): Promise<void> => {
  res.json([]); // Remove empty array with movie.service.ts loadMovies function
};

export { getMovies };
