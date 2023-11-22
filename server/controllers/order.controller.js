/* eslint-disable consistent-return */
/* eslint-disable import/extensions */

import orderService from '../services/order.service.js';
import { ErrorHandler } from '../helpers/error.js';

const getAllOrders = async (req, res) => {
  const results = await orderService.getAllOrders();
  res.status(200).json(results);
};

const registerClass = async (req, res) => {
  const { id } = req.params;
  const { idStudent } = req.body;

  console.log(req.body);

  try {
    const orderDetail = await orderService.registerClass({
      id_path: id, id_student: idStudent,
    });
    return res.status(200).json(orderDetail);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error adding data');
  }
};

const getUsersByIdPath = async (req, res) => {
  const { id } = req.params;

  try {
    const detailData = await orderService.getUsersByIdPath(id);
    return res.status(200).json(detailData);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error fetching data');
  }
};

const getUserPath = async (req, res) => {
  const { idStudent } = req.body;

  try {
    const detailData = await orderService.getUserPath(idStudent);
    return res.status(200).json(detailData);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error fetching data');
  }
};

const getMentorPath = async (req, res) => {
  const { idStudent } = req.body;

  try {
    const detailData = await orderService.getMentorPath(idStudent);
    return res.status(200).json(detailData);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error fetching data');
  }
};

const getUserinPath = async (req, res) => {
  const { idpath } = req.params;
  const { idStudent } = req.body;

  try {
    const detailData = await orderService.getUserinPath({
      id_path: idpath, id_student: idStudent,
    });
    return res.status(200).json(detailData);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error fetching data');
  }
};

export {
  getAllOrders, registerClass, getUsersByIdPath, getUserPath, getMentorPath, getUserinPath,
};
