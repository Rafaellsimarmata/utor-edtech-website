/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import {
  learnPath, getDetailPath, getItemsPath, getListMateri, createPath, createTopicPath,
  createMateriTopic,
} from '../controllers/learn.controller.js';

const routers = Router();

routers.get('/learn', learnPath);
routers.get('/getItemPath/:id', getItemsPath);
routers.get('/getDetailPath/:id', getDetailPath);
routers.get('/getListMateri/:id', getListMateri);
routers.post('/addPath', createPath);
routers.post('/addTopicPath/:id', createTopicPath);
routers.post('/addMateriTopic/:id', createMateriTopic);

export default routers;
