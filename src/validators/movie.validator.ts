import { param } from 'express-validator/check';

const movieRules = [param('page').isNumeric()];

export { movieRules };
