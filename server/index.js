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
app.set('trust proxy', 1);
app.use(cors({ credentials: true, origin: true }));
app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);
app.use(unknownEndPoint);
app.use(handleError);

// app.configure(() => {
//   // app.set('port', process.env.port || 3000);
//   // app.set('views', `${__dirname}/app/server/views`);
//   // app.set('view engine', 'jade');
//   // app.locals.pretty = true;
//   // app.use(express.favicon());
//   app.use(express.bodyParser({ keepExtensions: true, uploadDir: `${__dirname}/app/uploads` }));
//   app.use(express.methodOverride());
//   app.use(express.cookieParser());
//   app.use(express.session({ secret: 'super-duper-secret-secret' }));
//   // app.use(app.router);
//   // app.use(require('stylus').middleware({ src: `${__dirname}/app/public` }));
//   app.use(express.static(`${__dirname}/app/public`));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
