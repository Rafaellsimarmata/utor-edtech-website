/* eslint-disable import/extensions */
import { Router } from 'express';
import users from './users.js';
import auth from './auth.js';
import learnPage from './learnpage.js';
import orders from './orders.js';

const routers = Router();

routers.use('/auth', auth);
routers.use('/users', users);
routers.use(learnPage);
routers.use(orders);

export default routers;
