import express from 'express';

const getHealth = (_req: express.Request, res: express.Response): void => {
  console.log('---');
  console.log(process.env);
  console.log('---');
  res.json({
    healthy: true,
  });
};

export { getHealth };
