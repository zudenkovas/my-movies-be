import express from 'express';

const getHealth = (_req: express.Request, res: express.Response): void => {
  res.json({
    healthy: true,
  });
};

export { getHealth };
