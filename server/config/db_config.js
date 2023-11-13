import pg from 'pg';

const { Client } = pg;

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'db_hub',
  password: 'admin',
  port: 5432,
});

export default db;
