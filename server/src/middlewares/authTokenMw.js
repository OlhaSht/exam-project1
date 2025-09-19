const JwtService = require('../services/jwtService');
const TokenExpiredError = require('../errors/TokenExpiredError');
const MissingTokenError = require('../errors/MissingTokenError');

module.exports.checkAccessToken = async (req, res, next) => {
    console.log('HEADERS:::;:', req.headers.cookie);
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return next( new MissingTokenError());
    }

    const [, accessToken] = authHeader.split(" ");
    console.log("accessTokenMWcheckAccessToken =========>>>>>>>>>>>>", accessToken);

    try {
      req.tokenData = await JwtService.verifyAccessToken(accessToken);
      console.log("req.tokenDatacheckAccessToken =========>>>>>>>>>>>>", req.tokenData);

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
    console.log('🍪 refreshTokenMW, from cookies:', req.cookies?.refreshToken);
    if (!refreshToken) {
      return res.status(401).send({ message: 'No refresh token provided' });
    }
    req.tokenData = await JwtService.verifyRefreshToken(refreshToken);
    console.log("req.tokenDataMW refresh==========<<<<<<<<<<<<<", req.tokenData)
    next();
  } catch (err) {
    next(err)
  }
}