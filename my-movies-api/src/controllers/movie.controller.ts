import express from 'express';

const getMovies = (_req: any, res: any): void => {
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
