import jwt from 'jsonwebtoken';
import envs from 'dotenv';

envs.config();

const jwtGenerate = (userId) => {
  const payload = {
    user: userId,
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: '1hr' });
};

export default jwtGenerate;
