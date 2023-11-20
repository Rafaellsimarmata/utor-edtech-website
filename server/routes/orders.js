/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import {
  getAllOrders, registerClass, getUsersByIdPath, getUserPath, getMentorPath,
} from '../controllers/order.controller.js';

const routers = Router();

routers.get('/orders', getAllOrders);
routers.post('/register-class/:id', registerClass);
routers.get('/getusers/:id', getUsersByIdPath);
routers.get('/studentpath', getUserPath);
routers.get('/mentorPath', getMentorPath);

export default routers;
