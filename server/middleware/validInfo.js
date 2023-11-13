const validate = (req, res, next) => {
  const { email, name, password } = req.body;

  function validEmail(userEmail) {
    // eslint-disable-next-line no-useless-escape
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === '/register') {
    if (![email, name, password].every(Boolean)) {
      return res.status(401).json({
        message: 'Missing Credentials',
        status: 401,
      });
    }
    if (!validEmail(email)) {
      return res.status(401).json({
        message: 'Invalid Email',
        status: 401,
      });
    }
  } else if (req.path === '/login') {
    if (![email, password].every(Boolean)) {
      return res.status(401).json({
        message: 'Missing Credentials',
        status: 401,
      });
    }

    if (!validEmail(email)) {
      return res.status(401).json({
        message: 'Invalid Email',
        status: 401,
      });
    }
  }

  next();
  return true;
};

export default validate;
