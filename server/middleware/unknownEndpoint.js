/* eslint-disable import/extensions */
import { ErrorHandler } from '../helpers/error.js';

// eslint-disable-next-line no-unused-vars
const unknownEndpoint = (request, response) => {
  throw new ErrorHandler(401, 'unknown endpoint');
};

export default unknownEndpoint;
