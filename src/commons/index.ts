import express from 'express';

const CORS = (_req: express.Request, res: express.Response, next: express.NextFunction): void => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

const isLambdaRuntime = (): boolean => !!process.env.AWS_REGION;

export { CORS, isLambdaRuntime };
