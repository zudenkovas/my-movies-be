import express from 'express';

const getMovies = (_req: any, res: express.Response): void => {
  res.json([
    {
      title: 'Movie A test',
    },
    {
      title: 'Movie B',
    },
  ]);
};

export { getMovies };
