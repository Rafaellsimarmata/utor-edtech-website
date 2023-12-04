/* eslint-disable import/extensions */
// note : function terus export
import { nanoid } from 'nanoid';
import db from '../config/db_config.js';

// checking email has registered or not
const createReview = async (reviewData) => {
  const id = nanoid(10);

  const { rows: review } = await db.query(`INSERT INTO "reviews" ("id_chat","id_path","id_user", "review")
             VALUES ($1, $2,$3,$4) RETURNING *`, [id, reviewData.idPath, reviewData.idUser, reviewData.review]);

  return review[0];
};

const getReviewsPath = async (idPath) => {
  const { rows: reviews } = await db.query('SELECT * FROM reviews WHERE id_path = $1 ', [idPath]);

  return reviews[0];
};

export {
  createReview, getReviewsPath,
};
