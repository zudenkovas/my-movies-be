import express from 'express';

const getMovies = (_req: express.Request, res: any): void => {
  res.json([
    {
      title: 'Movie A',
    },
    {
      title: 'Movie B test',
    },
  ]);
};

export { getMovies };
