import express from 'express';

import { authenticate } from '../services/security.service';
import { validate } from '../commons';
import { movieRules } from '../validators/movie.validator';
import { deletePersonalMovie, getPersonalMovies, savePersonalMovie } from '../controllers/personal-movie.controller';

const router = express.Router();

router.route('/').get(authenticate, getPersonalMovies);
router.route('/').post(authenticate, validate(movieRules), savePersonalMovie);
router.route('/:id').delete(authenticate, deletePersonalMovie);

export default router;
