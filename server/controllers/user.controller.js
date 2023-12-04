/* eslint-disable import/extensions */
import userService from '../services/user.service.js';
import { ErrorHandler } from '../helpers/error.js';
import { hashPassword } from '../helpers/validatePassword.js';

const getAllUsers = async (req, res) => {
  const results = await userService.getAllUsers();
  res.status(200).json(results);
};

const createUser = async (req, res) => {
  const {
    password, email, name,
  } = req.body;
  const hashedPassword = hashPassword(password);

  console.log('controller');

  const user = await userService.createUser({
    hashedPassword,
    email,
    name,
  });

  res.status(201).json({
    status: 'success',
    user,
  });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: 'user not found' });
  }
};

const getUserProfile = async (req, res) => {
  const { id } = req.user;
  const user = await userService.getUserById(id);

  return res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const {
    username, email, fullname, address, city, state, country,
  } = req.body;
  if (+req.params.id === req.user.id || req.user.roles.includes('mentor')) {
    try {
      const results = await userService.updateUser({
        username,
        email,
        fullname,
        address,
        city,
        state,
        country,
        id: req.params.id,
      });
      return res.status(201).json(results);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  }
  throw new ErrorHandler(401, 'Unauthorized');
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (+id === req.user.id || req.user.roles.includes('mentor')) {
    try {
      const result = await userService.deleteUser(id);
      res.status(200).json(result);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  }
  throw new ErrorHandler(401, 'Unauthorized');
};

export {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserProfile,
};
