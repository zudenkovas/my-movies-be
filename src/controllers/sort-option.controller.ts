import express from 'express';

import { loadSortOptions } from '../services/sort-option.service';

const getSortOptions = (_req: express.Request, res: express.Response): void => {
  const sortOptions = loadSortOptions();
  res.json(sortOptions);
};

export { getSortOptions };
