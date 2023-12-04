/* eslint-disable import/extensions */
import { ErrorHandler } from '../helpers/error.js';
import reviewService from '../services/review.service.js';

const createReview = async (req, res) => {
  const { id } = req.params;

  const {
    idUser, review,
  } = req.body;

  const reviewData = await reviewService.addReview({
    idPath: id,
    idUser,
    review,
  });

  res.status(201).json({
    status: 'success',
    reviewData,
  });
};

const getReviewsPath = async (req, res) => {
  const { id } = req.params;

  try {
    const reviewsData = await reviewService.getReviews(id);
    return res.status(200).json(reviewsData);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'User not found');
  }
};

export {
  createReview,
  getReviewsPath,
};
