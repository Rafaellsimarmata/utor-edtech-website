/* eslint-disable import/extensions */
// note : function terus export
import { nanoid } from 'nanoid';
import db from '../config/db_config.js';

// checking email has registered or not
const getUserByEmailDb = async (email) => {
  const { rows: user } = await db.query('SELECT * FROM users WHERE email = $1 ', [email]);
  return user[0];
};

const getAllUsersDb = async () => {
  const { rows: users } = await db.query('select * from users');
  return users;
};

const getUserByIdDb = async (id) => {
  const { rows: user } = await db.query('SELECT * FROM users WHERE id = $1 ', [id]);
  return user[0];
};

const deleteUserDb = async (id) => {
  const { rows: user } = await db.query('DELETE FROM users where id = $1 returning *', [id]);
  return user[0];
};

const updateUserDb = async ({
  email,
  name,
  id,
}) => {
  const { rows: user } = await db.query(
    'UPDATE users set  email = $1, name = $2 where user_id = $3 returning *',
    [email, name, id],
  );
  return user[0];
};

const createUserGoogleDb = async ({ sub, email, fullName }) => {
  const id = nanoid(10);

  const { rows } = await db.query(
    `INSERT INTO "users" (id, email, name, google_id) 
      VALUES($1, $2, $3, $4) ON CONFLICT (email) 
      DO UPDATE SET  google_id = $4, name = $3 returning *`,
    [id, email, fullName, sub],
  );
  return rows[0];
};

const changeUserPasswordDb = async (hashedPassword, email) => {
  const query = await db.query('update users set password = $1 where email = $2', [
    hashedPassword,
    email,
  ]);
  return query;
};

const addUserDb = async (password, email, name) => {
  const id = nanoid(10);
  console.log('db');

  const { rows: user } = await db.query(`INSERT INTO "users" ("id","email","name", "password")
             VALUES ($1, $2,$3,$4) RETURNING *`, [id, email, name, password]);

  console.log('db create');

  return user[0];
};

export {
  addUserDb, changeUserPasswordDb, createUserGoogleDb, getAllUsersDb, getUserByEmailDb,
  getUserByIdDb, deleteUserDb, updateUserDb,
};
