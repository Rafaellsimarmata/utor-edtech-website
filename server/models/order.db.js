/* eslint-disable import/extensions */
import { nanoid } from 'nanoid';
import db from '../config/db_config.js';

const registerClassDb = async (orderData) => {
  const orderId = nanoid(8);

  const { rows } = await db.query(
    `INSERT INTO "orders" (id_order, id_path, id_student)
      VALUES($1, $2, $3) returning *`,
    [orderId, orderData.id_path, orderData.id_student],
  );

  return rows[0];
};

const getUsersByIdPathDb = async (idPath) => {
  const { rows: detailData } = await db.query('SELECT id_student FROM orders WHERE id_path = $1 ', [idPath]);
  return detailData;
};

const getUserPathDb = async (idStudent) => {
  const { rows: detailData } = await db.query('SELECT * FROM orders WHERE id_student = $1 ', [idStudent]);
  return detailData;
};

const getMentorPathDb = async (idMentor) => {
  const { rows: detailData } = await db.query('SELECT * FROM path WHERE id_mentor = $1 ', [idMentor]);
  return detailData;
};

const getAllOrdersDb = async () => {
  const { rows: detailData } = await db.query('SELECT * FROM orders');
  return detailData;
};

export {
  registerClassDb, getUsersByIdPathDb, getUserPathDb, getMentorPathDb, getAllOrdersDb,
};
