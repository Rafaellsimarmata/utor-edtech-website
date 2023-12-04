/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import {
  createReview, getReviewsPath,
} from '../models/review.db.js';

import { ErrorHandler } from '../helpers/error.js';

class ReviewService {
  addReview = async (reviewData) => {
    try {
      return await createReview(reviewData);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getReviews = async (idPath) => {
    try {
      return await getReviewsPath(idPath);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
}

export default new ReviewService();
