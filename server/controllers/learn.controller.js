/* eslint-disable import/extensions */
import learnPageService from '../services/learnPage.service.js';
import { ErrorHandler } from '../helpers/error.js';

const learnPath = async (req, res) => {
  const results = await learnPageService.getAllPath();
  res.status(200).json(results);
};

const getDetailPath = async (req, res) => {
  const { id } = req.params;

  try {
    const pathDetail = await learnPageService.getPathDetail(id);
    return res.status(200).json(pathDetail);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error fetching data');
  }
};

const getItemsPath = async (req, res) => {
  const { id } = req.params;

  try {
    const pathDetail = await learnPageService.getItemsPath(id);
    return res.status(200).json(pathDetail);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error fetching data');
  }
};

const getListMateri = async (req, res) => {
  const { id } = req.params;

  try {
    const pathDetail = await learnPageService.getListMateri(id);
    return res.status(200).json(pathDetail);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error fetching data');
  }
};

// const getUrlVid = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const pathDetail = await learnPageService.getUrlVid(id);
//     return res.status(200).json(pathDetail);
//   } catch (error) {
//     throw new ErrorHandler(error.statusCode, 'Error fetching data');
//   }
// };

export {
  learnPath, getDetailPath, getItemsPath, getListMateri,
};
