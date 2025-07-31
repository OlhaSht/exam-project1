const { promisify } = require('util');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const {
  ACCESS_TOKEN_TIME,
  REFRESH_TOKEN_TIME
} = require('../constants')

const tokenConfig = {
  access:{
    secret: process.env.ACCESS_TOKEN_SECRET,
    time: ACCESS_TOKEN_TIME
  },
  refresh:{
    secret: process.env.REFRESH_TOKEN_SECRET,
    time: REFRESH_TOKEN_TIME
  }
};

const verifyPromiseJWT = promisify(jwt.verify);
const signPromiseJWT = promisify(jwt.sign);
const buildPayload = (user) => ({
  userId: user.id,
  email: user.email,
  role: user.role
});
const verifyToken = (token, {secret})=> verifyPromiseJWT(token, secret);
const createToken = (payload, {secret, time}) => {
  return signPromiseJWT(
    buildPayload(payload),
    secret,
    {
      expiresIn: time,
      subject: String(payload.id)
    }
  );
};

module.exports.createTokenPair = async (payload) => {
  if (!tokenConfig.access.secret || !tokenConfig.refresh.secret) {
  throw new Error('JWT secrets are not defined in environment variables.');
}

  return {
    access: await createToken(payload, tokenConfig.access), 
    refresh: await createToken(payload, tokenConfig.refresh)
  }
}

module.exports.verifyAccessToken = (token) => verifyToken(token, tokenConfig.access );
module.exports.verifyRefreshToken = (token) => verifyToken(token, tokenConfig.refresh );