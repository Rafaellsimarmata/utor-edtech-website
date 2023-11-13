/* eslint-disable import/extensions */
import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUser,
  getUserProfile,
} from '../controllers/user.controller.js';
import verifyMentor from '../middleware/verifyMentor.js';
import verifyToken from '../middleware/verifyToken.js';

const routers = Router();
routers.use(verifyToken);
routers.route('/').get(verifyMentor, getAllUsers).post(verifyMentor, createUser);
routers.route('/profile').get(getUserProfile);
routers.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

export default routers;
