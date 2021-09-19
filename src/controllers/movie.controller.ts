import express from 'express';

const getMovies = (_req: express.Request, res: express.Response): void => {
  res.json([]); // Modify response JSON, to return list of movies (from the story description)
};

export { getMovies };
