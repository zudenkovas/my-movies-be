import express from 'express';

import { authenticate } from '../services/security.service';
import { deletePersonalMovie, getPersonalMovies, savePersonalMovie } from '../controllers/personal-movie.controller';

const router = express.Router();

router.route('/').get(authenticate, getPersonalMovies);
router.route('/').post(authenticate, savePersonalMovie);
router.route('/:id').delete(authenticate, deletePersonalMovie);

export default router;
