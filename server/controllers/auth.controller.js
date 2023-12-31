/* eslint-disable consistent-return */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
// note : function terus export
import authService from '../services/auth.service.js';
import { signupMail } from '../services/mail.service.js';
import { ErrorHandler } from '../helpers/error.js';

const createAccount = async (req, res) => {
  const {
    error, message, token, refreshToken, user,
  } = await authService.signUp(req.body);

  if (error) {
    return res.status(401).json({
      message,
    });
  }

  if (process.env.NODE_ENV !== 'test') {
    await signupMail(user.email, user.name.split(' ')[0]);
  }

  res.header('auth-token', token);
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'development' ? true : 'none',
    secure: process.env.NODE_ENV !== 'development',
  });
  res.status(201).json({
    token,
    user,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const {
    error, message, token, refreshToken, user,
  } = await authService.login(
    email,
    password,
  );

  if (error) {
    return res.status(403).json({
      message,
    });
  }

  res.header('auth-token', token);
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'development' ? true : 'none',
    secure: process.env.NODE_ENV !== 'development',
  });
  res.status(200).json({
    token,
    user,
  });
};

const googleLogin = async (req, res) => {
  const { code } = req.body;

  const user = await authService.googleLogin(code);
  res.header('auth-token', user.token);
  res.cookie('refreshToken', user.refreshToken, {
    httpOnly: true,
  });
  res.json(user);
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  await authService.forgotPassword(email);

  res.json({ status: 'OK' });
};

// verify password reset token
const verifyResetToken = async (req, res) => {
  const { token, email } = req.body;
  const isTokenValid = await authService.verifyResetToken(token, email);

  if (!isTokenValid) {
    res.json({
      message: 'Token has expired. Please try password reset again.',
      showForm: false,
    });
  } else {
    res.json({
      showForm: true,
    });
  }
};

const refreshToken = async (req, res) => {
  if (!req.cookies.refreshToken) {
    throw new ErrorHandler(401, 'Token missing');
  }
  const tokens = await authService.generateRefreshToken(
    req.cookies.refreshToken,
  );
  res.header('auth-token', tokens.token);
  res.cookie('refreshToken', tokens.refreshToken, {
    httpOnly: true,
  });
  res.json(tokens);
};

const resetPassword = async (req, res) => {
  const {
    password, password2, token, email,
  } = req.body;

  await authService.resetPassword(password, password2, token, email);

  res.json({
    status: 'OK',
    message: 'Password reset. Please login with your new password.',
  });
};

export {
  createAccount,
  loginUser,
  googleLogin,
  forgotPassword,
  verifyResetToken,
  resetPassword,
  refreshToken,
};
