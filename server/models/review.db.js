/* eslint-disable import/extensions */
// note : function terus export
import { nanoid } from 'nanoid';
import db from '../config/db_config.js';

// checking email has registered or not
const createReview = async (reviewData) => {
  const id = nanoid(10);
  console.log('here');
  console.log(reviewData);

  const { rows: review } = await db.query(`INSERT INTO "reviews" ("id_chat","id_path","id_user", "review", "nama_user", "img_user")
             VALUES ($1, $2,$3,$4,$5,$6) RETURNING *`, [id, reviewData.idPath, reviewData.idUser, reviewData.review, reviewData.namaUser, reviewData.imgUser]);

  return review[0];
};

const getReviewsPath = async (idPath) => {
  const { rows: reviews } = await db.query('SELECT * FROM reviews WHERE id_path = $1 ', [idPath]);

  return reviews;
};

export {
  createReview, getReviewsPath,
};
