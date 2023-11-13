import jwt from 'jsonwebtoken';
import envs from 'dotenv';

envs.config();

// eslint-disable-next-line consistent-return
const authorize = async (req, res, next) => {
  // Get token from header
  const token = req.header('token');

  // Check if not token
  if (!token) {
    return res.status(403).json({ msg: 'authorization denied' });
  }

  // Verify token
  try {
    // it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authorize;
