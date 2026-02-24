const jwt = require('jsonwebtoken');
const CONSTANTS = require('../constants');
const TokenError = require('../errors/TokenError');
const userQueries = require('../controllers/queries/userQueries');

module.exports.checkAuth = async (req, res, next) => {
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    return next(new TokenError('need token'));
  }
  try {
    const tokenData = jwt.verify(accessToken, CONSTANTS.JWT_SECRET);
    const foundUser = await userQueries.findUser({ id: tokenData.userId });
    // res.send({
    //   firstName: foundUser.firstName,
    //   lastName: foundUser.lastName,
    //   role: foundUser.role,
    //   id: foundUser.id,
    //   avatar: foundUser.avatar,
    //   displayName: foundUser.displayName,
    //   balance: foundUser.balance,
    //   email: foundUser.email,
    // });
    req.tokenData = {
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      role: foundUser.role,
      id: foundUser.id,
      avatar: foundUser.avatar,
      displayName: foundUser.displayName,
      balance: foundUser.balance,
      email: foundUser.email,
    };
    next();
  } catch (err) {
    next(new TokenError());
  }
};

module.exports.checkToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(new TokenError('need token'));
  }
  const accessToken = authHeader.split(' ')[1];

  try {
    req.tokenData = jwt.verify(accessToken, CONSTANTS.ACCESS_TOKEN_SECRET);
    next();
  } catch (err) {
    console.error('JWT verification failed:', err);
    next(new TokenError());
  }
};
