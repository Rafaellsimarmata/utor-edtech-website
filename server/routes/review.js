/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import {
  createReview,
  getReviewsPath,
} from '../controllers/review.controller.js';

const routers = Router();

routers.post('/add-review/:id', createReview);
routers.get('/get-review/:id', getReviewsPath);

export default routers;
