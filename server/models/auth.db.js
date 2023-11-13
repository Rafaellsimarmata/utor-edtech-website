/* eslint-disable import/extensions */
import db from '../config/db_config.js';

const isValidTokenDb = async ({ token, email, curDate }) => {
  const { rows } = await db.query(
    `
      SELECT EXISTS(select * from public."accesstoken" 
      where token = $1 AND email = $2 AND expiration > $3 AND used = $4)
    `,
    [token, email, curDate, false],
  );
  return rows[0].exists;
};

const createResetTokenDb = async ({ email, expireDate, fpSalt }) => {
  await db.query(
    'insert into public."accesstoken" (email, expiration, token) values ($1, $2, $3)',
    [email, expireDate, fpSalt],
  );

  return true;
};

const setTokenStatusDb = async (email) => {
  await db.query(
    'update public."accesstoken" set used = $1 where email = $2',
    [true, email],
  );

  return true;
};

const deleteResetTokenDb = async (curDate) => {
  await db.query('delete from public."accesstoken" where expiration <= $1', [
    curDate,
  ]);
  return true;
};

export {
  isValidTokenDb,
  createResetTokenDb,
  setTokenStatusDb,
  deleteResetTokenDb,
};
