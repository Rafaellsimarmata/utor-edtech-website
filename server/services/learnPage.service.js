/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import {
  getAllPathDb, getDetailPathDb, getItemPathDb, getListMateriDb,
} from '../models/learnPage.db.js';

import { ErrorHandler } from '../helpers/error.js';

class LearnPageService {
  getAllPath = async () => {
    try {
      return await getAllPathDb();
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getPathDetail = async (id) => {
    try {
      return await getDetailPathDb(id);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getItemsPath = async (id) => {
    try {
      return await getItemPathDb(id);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  getListMateri = async (id) => {
    try {
      return await getListMateriDb(id);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  };

  // getUrlVid = async (id) => {
  //   try {
  //     return await getUrlVidDb(id);
  //   } catch (error) {
  //     throw new ErrorHandler(error.statusCode, error.message);
  //   }
  // };
}

export default new LearnPageService();
