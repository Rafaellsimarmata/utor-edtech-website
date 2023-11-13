/* eslint-disable import/extensions */
import db from '../config/db_config.js';

// fetching all path from db
const getAllPathDb = async () => {
  const { rows: paths } = await db.query('SELECT * FROM path');
  return paths;
};

// fetching detail path
const getDetailPathDb = async (id) => {
  const { rows: pathData } = await db.query('SELECT * FROM path WHERE id_path = $1 ', [id]);
  return pathData;
};

const getItemPathDb = async (id) => {
  const { rows: items } = await db.query('SELECT * FROM topic WHERE id_path = $1 ', [id]);
  return items;
};

const getListMateriDb = async (id) => {
  const { rows: listMateri } = await db.query('SELECT * FROM list_materi WHERE id_topic = $1 ', [id]);
  return listMateri;
};

export {
  getAllPathDb, getDetailPathDb, getItemPathDb, getListMateriDb,
};
