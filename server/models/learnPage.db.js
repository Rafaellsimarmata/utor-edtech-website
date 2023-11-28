/* eslint-disable import/extensions */
import { nanoid } from 'nanoid';
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

const addPathDb = async (pathData) => {
  const id = nanoid(10);

  const { rows } = await db.query(
    `INSERT INTO "path" (id_path, name_path, description, peserta, peluang, levels, benefit, category, img_url, id_mentor, price)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning *`,
    [id, pathData.namePath, pathData.desc, pathData.peserta, pathData.peluang,
      pathData.level, pathData.benefit, pathData.category,
      pathData.imgUrl, pathData.idMentor, pathData.price],
  );

  return rows[0];
};

const addTopicPathDb = async (topicData) => {
  const id = nanoid(10);

  const { rows } = await db.query(
    `INSERT INTO "topic" (id_path, id_topic, judul, desc_topic, img_url, ispremium)
      VALUES($1, $2, $3, $4, $5, $6) returning *`,
    [topicData.id, id, topicData.judul, topicData.descTopic, topicData.imgUrl, topicData.ispremium],
  );

  return rows[0];
};

const addMateriTopicDb = async (materiData) => {
  const id = nanoid(10);

  const { rows } = await db.query(
    `INSERT INTO "list_materi" (id_topic, id_materi, judul_materi , url_vid, description)
      VALUES($1, $2, $3, $4, $5) returning *`,
    [materiData.id, id, materiData.judulMateri, materiData.urlVid, materiData.desc],
  );
  return rows[0];
};

const orderPathDb = async (orderData) => {
  const id = nanoid(10);

  const { rows } = await db.query(
    `INSERT INTO "orders" (id_order, id_path, id_student)
      VALUES($1, $2, $3) returning *`,
    [id, orderData.id_path, orderData.id_student],
  );
  return rows[0];
};

export {
  getAllPathDb, getDetailPathDb, getItemPathDb, getListMateriDb, addPathDb, addTopicPathDb,
  addMateriTopicDb, orderPathDb,
};
