/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import envs from 'dotenv';
import fileUpload from 'express-fileupload';
import routes from './routes/index.js';
import db from './config/db_config.js';
import unknownEndPoint from './middleware/unknownEndpoint.js';
import { handleError } from './helpers/error.js';

envs.config();
const app = express();
const port = 3009;

// connect database
db.connect((err) => {
  if (err) console.log(err.message);
  else console.log('DB connected');
});

app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));

// To prevent CORS errors
// app.set('trust proxy', 1);
// app.use(cors({ credentials: true, origin: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);
app.use(unknownEndPoint);
app.use(handleError);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
