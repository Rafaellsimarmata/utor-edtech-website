/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { OAuth2Client } from 'google-auth-library';
import moment from 'moment';
import { signupMail, forgotPasswordMail, resetPasswordMail } from './mail.service.js';
import logger from '../utils/logger.js';
import { ErrorHandler } from '../helpers/error.js';
import validateUser from '../helpers/validateUser.js';
import {
  getUserByEmailDb, addUserDb, createUserGoogleDb, changeUserPasswordDb,
} from '../models/user.db.js';
import {
  isValidTokenDb,
  createResetTokenDb,
  setTokenStatusDb,
  deleteResetTokenDb,
} from '../models/auth.db.js';

const curDate = moment().format();

class AuthService {
  async signUp(user) {
    try {
      const {
        password, email, name,
      } = user;

      if (!email || !password || !name) {
        return {
          error: true,
          message: 'All field Required',
        };
      }

      if (validateUser(email, password)) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const userByEmail = await getUserByEmailDb(email);
        if (userByEmail) {
          // return res.status(401).json('email taken already');
          // throw new ErrorHandler(401, 'email taken already');
          return {
            error: true,
            message: 'email taken already',
          };
        }

        const newUser = await addUserDb(
          hashedPassword,
          email,
          name,
        );

        const token = await this.signToken({
          id: newUser.id,
          roles: newUser.roles,
        });

        const refreshToken = await this.signRefreshToken({
          id: newUser.id,
          roles: newUser.roles,
        });

        return {
          token,
          refreshToken,
          user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          },
        };
      }
      return {
        error: true,
        message: 'Input Validation Error',
      };
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  }

  async login(email, password) {
    try {
      if (!validateUser(email, password)) {
        throw new ErrorHandler(403, 'Invalid login');
      }

      const user = await getUserByEmailDb(email);

      if (!user) {
        throw new ErrorHandler(403, 'Email or password incorrect.');
      }

      if (user.google_id && !user.password) {
        throw new ErrorHandler(403, 'Login in with Google');
      }

      const {
        password: dbPassword,
        id,
        roles,
        name,
      } = user;
      const isCorrectPassword = await bcrypt.compare(password, dbPassword);

      if (!isCorrectPassword) {
        throw new ErrorHandler(403, 'Email or password incorrect.');
      }

      const token = await this.signToken({ id, roles });
      const refreshToken = await this.signRefreshToken({
        id,
        roles,
      });
      return {
        token,
        refreshToken,
        user: {
          id,
          name,
        },
      };
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  }

  async googleLogin(code) {
    try {
      const ticket = await this.verifyGoogleIdToken(code);
      const {
        name, email, sub, picture,
      } = ticket.getPayload();

      const fullName = name;

      try {
        const user = await getUserByEmailDb(email);
        if (!user?.google_id) {
          // eslint-disable-next-line no-shadow
          const dataUser = await createUserGoogleDb({
            sub,
            email,
            fullName,
            picture,
          });

          await signupMail(dataUser.email, dataUser.name.split(' ')[0]);
        }

        const {
          // eslint-disable-next-line no-shadow
          id, roles, name,
        } = await getUserByEmailDb(email);

        const token = await this.signToken({
          id,
          roles,
        });

        const refreshToken = await this.signRefreshToken({
          id,
          roles,
        });

        return {
          token,
          refreshToken,
          user: {
            id,
            name,
          },
        };
      } catch (error) {
        throw new ErrorHandler(error.statusCode, error.message);
      }
    } catch (error) {
      throw new ErrorHandler(401, error.message);
    }
  }

  async generateRefreshToken(data) {
    const payload = await this.verifyRefreshToken(data);

    const token = await this.signToken(payload);
    const refreshToken = await this.signRefreshToken(payload);

    return {
      token,
      refreshToken,
    };
  }

  async forgotPassword(email) {
    const user = await getUserByEmailDb(email);

    if (user) {
      try {
        await setTokenStatusDb(email);

        // Create a random reset token
        const fpSalt = crypto.randomBytes(64).toString('base64');

        // token expires after one hour
        const expireDate = moment().add(1, 'h').format();

        await createResetTokenDb({ email, expireDate, fpSalt });

        await forgotPasswordMail(fpSalt, email);
      } catch (error) {
        throw new ErrorHandler(error.statusCode, error.message);
      }
    } else {
      throw new ErrorHandler(400, 'Email not found');
    }
  }

  async verifyResetToken(token, email) {
    try {
      await deleteResetTokenDb(curDate);
      const isTokenValid = await this.isValidTokenDb({
        token,
        email,
        curDate,
      });

      return isTokenValid;
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  }

  async resetPassword(password, password2, token, email) {
    const isValidPassword = typeof password === 'string' && password.trim().length >= 6;

    if (password !== password2) {
      throw new ErrorHandler(400, 'Password do not match.');
    }

    if (!isValidPassword) {
      throw new ErrorHandler(
        400,
        'Password length must be at least 6 characters',
      );
    }

    try {
      const isTokenValid = await isValidTokenDb({
        token,
        email,
        curDate,
      });

      if (!isTokenValid) {
        throw new ErrorHandler(
          400,
          'Token not found. Please try the reset password process again.',
        );
      }

      await setTokenStatusDb(email);

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      await changeUserPasswordDb(hashedPassword, email);
      await resetPasswordMail(email);
    } catch (error) {
      throw new ErrorHandler(error.statusCode, error.message);
    }
  }

  async verifyGoogleIdToken(code) {
    // https://github.com/MomenSherif/react-oauth/issues/12#issuecomment-1131408898

    const oauthClient = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'postmessage',
    );
    const { tokens } = await oauthClient.getToken(code);

    const ticket = oauthClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.CLIENT_ID,
    });

    return ticket;
  }

  async signToken(data) {
    try {
      return jwt.sign(data, process.env.SECRET, { expiresIn: '1h' });
    } catch (error) {
      logger.error(error);
      throw new ErrorHandler(500, 'An error occurred');
    }
  }

  async signRefreshToken(data) {
    try {
      return jwt.sign(data, process.env.REFRESH_SECRET, { expiresIn: '1h' });
    } catch (error) {
      logger.error(error);
      throw new ErrorHandler(500, error.message);
    }
  }

  async verifyRefreshToken(token) {
    try {
      const payload = jwt.verify(token, process.env.REFRESH_SECRET);
      return {
        id: payload.id,
        roles: payload.roles,
      };
    } catch (error) {
      logger.error(error);
      throw new ErrorHandler(500, error.message);
    }
  }
}

export default new AuthService();
