/* eslint-disable import/extensions */
import { Router } from 'express';
import users from './users.js';
import auth from './auth.js';
import learnPage from './learnpage.js';

const routers = Router();

routers.use('/auth', auth);
// still maintenance
routers.use('/users', users);
routers.use(learnPage);

export default routers;
