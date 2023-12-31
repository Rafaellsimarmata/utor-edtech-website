/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import {
  registerClassDb, getUsersByIdPathDb, getUserPathDb,
  getMentorPathDb, getAllOrdersDb, getUserInPathDb, topupDb,
} from '../models/order.db.js';

import { ErrorHandler } from '../helpers/error.js';

class OrderService {
  topUp = async (orderData, jumlah) => {
    try {
      return await topupDb(orderData, jumlah);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  registerClass = async (orderData) => {
    try {
      return await registerClassDb(orderData);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getUsersByIdPath = async (idPath) => {
    try {
      return await getUsersByIdPathDb(idPath);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getUserPath = async (idStudent) => {
    try {
      return await getUserPathDb(idStudent);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getMentorPath = async (idMentor) => {
    try {
      return await getMentorPathDb(idMentor);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getAllOrders = async () => {
    try {
      return await getAllOrdersDb();
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getUserinPath = async (data) => {
    try {
      return await getUserInPathDb(data);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };
}

export default new OrderService();
