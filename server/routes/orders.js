/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import {
  getAllOrders, registerClass, getUsersByIdPath, getUserPath, getMentorPath, getUserinPath, topUp,
} from '../controllers/order.controller.js';

const routers = Router();

routers.get('/orders', getAllOrders);
routers.post('/register-class/:id', registerClass);
routers.get('/getusers/:id', getUsersByIdPath);
routers.post('/studentpath', getUserPath);
routers.post('/mentorPath', getMentorPath);
routers.post('/check-user/:idpath', getUserinPath);
routers.post('/topup', topUp);

export default routers;
