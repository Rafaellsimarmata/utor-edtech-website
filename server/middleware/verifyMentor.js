/* eslint-disable import/extensions */
import { ErrorHandler } from '../helpers/error.js';

export default (req, res, next) => {
  const { roles } = req.user;
  if (roles && roles.includes('mentor')) {
    req.user = {
      ...req.user,
      roles,
    };
    return next();
  }
  throw new ErrorHandler(401, 'require mentor role');
};
