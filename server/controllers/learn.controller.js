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

const createPath = async (req, res) => {
  const {
    namePath, desc, peserta, peluang, level, benefit, category, imgUrl,
  } = req.body;

  // const { id: idMentor } = req.user;
  // console.log(idMentor);
  const idMentor = 'dgrCUzi6Cu';

  try {
    const pathDetail = await learnPageService
      .createPath({
        namePath, desc, peserta, peluang, level, benefit, category, imgUrl, idMentor,
      });
    return res.status(200).json(pathDetail);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error adding data');
  }
};

const createTopicPath = async (req, res) => {
  const { id } = req.params;
  const { judul, descTopic, imgUrl } = req.body;
  try {
    const pathDetail = await learnPageService.createTopicPath({
      id, judul, descTopic, imgUrl,
    });
    return res.status(200).json(pathDetail);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error adding data');
  }
};

const createMateriTopic = async (req, res) => {
  const { id } = req.params;
  const { judulMateri, urlVid, desc } = req.body;
  try {
    const pathDetail = await learnPageService.createMateriTopic({
      id, judulMateri, urlVid, desc,
    });
    return res.status(200).json(pathDetail);
  } catch (error) {
    throw new ErrorHandler(error.statusCode, 'Error adding data');
  }
};

export {
  learnPath, getDetailPath, getItemsPath, getListMateri, createPath, createTopicPath,
  createMateriTopic,
};
