/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import cors from 'cors';

import validate from '../middleware/validInfo.js';
// import '../passport.js';
import {
  createAccount,
  loginUser,
  googleLogin,
  forgotPassword,
  verifyResetToken,
  resetPassword,
  refreshToken,
} from '../controllers/auth.controller.js';

const routers = Router();

routers.use(cors({ credentials: true, origin: 'https://utor-web.vercel.app/' }));
routers.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

routers.post('/register', validate, createAccount);
routers.post('/login', validate, loginUser);
routers.post('/google', googleLogin);
routers.post('/forgot-password', forgotPassword);
// token for reset password
routers.post('/check-token', verifyResetToken);

routers.post('/reset-password', resetPassword);

routers.post('/refresh-token', refreshToken);

export default routers;
