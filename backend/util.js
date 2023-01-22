import jwt from 'jsonwebtoken';
import config from './config';
const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSuscp: user.isSuscp,
    },
    config.JWT_SECRET,
    {
      expiresIn: '48h',
    }
  );

};
const  isAuthFactory = (fn) => {
  return (req, res, next) => {
    isAuth(req, res, () => {
      fn(req, res, next);
    });
  }
}

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: 'Invalid Token' });
      }
      req.user = decode;
      next();
      return;
    });
  } else {
    return res.status(401).send({ message: 'Token is not supplied.' });
  }
};

const isAdmin = (req, res, next) => {
  console.log(req.user);
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ message: 'Admin Token is not valid.' });
};
const isSuscp = (req, res, next) => {
  console.log(req.user);
  if (req.user && req.user.isSuscp) {
    return next();
  }
  return res.status(401).send({ message: 'suscrip Token is not valid.' });
};

export { getToken, isAuth, isAdmin, isSuscp, isAuthFactory };
