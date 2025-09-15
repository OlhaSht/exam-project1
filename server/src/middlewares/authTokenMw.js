const JwtService = require('../services/jwtService');
const TokenExpiredError = require('../errors/TokenExpiredError');
const MissingTokenError = require('../errors/MissingTokenError');



// module.exports.checkAccessToken = async (req, res, next) => {
//   try {
//     const {headers:{authorization}} = req;
//     if(authorization){
//       const [, accessToken] = authorization.split(' ');  
//       console.log("accessTokenMWcheckAccessToken =========>>>>>>>>>>>>", accessToken)
//       req.tokenData = await JwtService.verifyAccessToken(accessToken);
//     if(!req.tokenData){
//       return (createHttpError(401, 'No access token provided'))
//     }  
//       console.log("req.tokenDatacheckAccessToken =========>>>>>>>>>>>>", req.tokenData)
//       return next();      
//     }
//     next(createHttpError(401, 'Need token'))
//   } catch (error) {
//     next(error)
//   }
// }


module.exports.checkAccessToken = async (req, res, next) => {
  //try
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
        //const error = new Error('Token expired')
        //error.code = 401
        return next(new TokenExpiredError());
      }
      return next();
    } catch (err) {
      console.log('obgectError===',err.data);
      console.error("❌ Access token verification failed:", err.message);
      console.log('obgectError2===',err.data);
      //console.log('🔥 Error before next:', JSON.stringify(err, null, 2));
      //console.log("🔥 Error before next:", err);
      return next(err);              //(createHttpError(401, "TokenExpiredError"));  //Invalid or expired access token
    }
  }; 
  //catch (error) {
    //console.error("❌ Unexpected middleware error:", error);
    //return next(createHttpError(401, "Internal server error in token check"));
  //}
//};

module.exports.checkRefreshToken = async (req, res, next) => {
  try {
    // const {body: {refreshToken}} = req;
    const refreshToken = req.cookies?.refreshToken;
    console.log('🍪 refreshTokenMW, который пришел из куки:', req.cookies?.refreshToken);
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