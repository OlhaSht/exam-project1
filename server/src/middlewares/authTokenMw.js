const JwtService = require('../services/jwtService');
const TokenExpiredError = require('../errors/TokenExpiredError');
const MissingTokenError = require('../errors/MissingTokenError');

module.exports.checkAccessToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(new MissingTokenError());
  }
  const [, accessToken] = authHeader.split(' ');
  try {
    req.tokenData = await JwtService.verifyAccessToken(accessToken);
    if (!req.tokenData) {
      return next(new TokenExpiredError());
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports.checkRefreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return res.status(401).send({ message: 'No refresh token provided' });
    }
    req.tokenData = await JwtService.verifyRefreshToken(refreshToken);
    next();
  } catch (err) {
    next(err);
  }
};
