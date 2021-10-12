import express from 'express';
import mongoose from 'mongoose';

export const PAGE_SIZE = 20;

export const CORS = (_req: express.Request, res: express.Response, next: express.NextFunction): void => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

export const isLambdaRuntime = (): boolean => !!process.env.AWS_LAMBDA_FUNCTION_NAME;

export const connectToMongoDb = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const connectionOptions: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(process.env.MONGO_URL || 'UNDEFINED', connectionOptions);
};
