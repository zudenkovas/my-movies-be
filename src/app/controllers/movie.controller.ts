import express from 'express';

const getMovies = (_req: express.Request, res: express.Response): void => {
    res.json([{
        title: 'Movie A'
    }, {
        title: 'Movie B'
    }]);
};

export { getMovies };
