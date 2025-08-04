const createHttpError = require('http-errors')
const { Users, RefreshToken } = require('../models')
const AuthService = require('../services/authService')

module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password }
    } = req
    const user = await Users.findOne({
      where: { email }
    });
    if (user && (await user.comparePassword(password))) {
      const data = await AuthService.createSession(user)
      // return res.status(200).send({ data })
      res.cookie('refreshToken', data.refreshToken, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
      })

      return res.status(200).send({ accessToken: data.accessToken })
    }
    next(createHttpError(401, 'Invalid user authentication.'))
  } catch (error) {
    next(error)
  }
};
module.exports.registration = async (req, res, next) => {
  try {
    const { body } = req
    const user = await Users.create(body)
    if (user) {
      const data = await AuthService.createSession(user)
      // return res.status(200).send({ data })
      res.cookie('refreshToken', data.refreshToken, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
      })

      return res.status(200).send({ accessToken: data.accessToken })
    }
    next(createHttpError(400, 'Invalid user data.'))
  } catch (error) {
    next(error)
  }
};
module.exports.refresh = async (req, res, next) => {
  try {
    // const {body: { refreshToken } } = req 
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return next(createHttpError(401, 'No refresh token found in cookies.'));
    }
    const refreshTokenInstance = await RefreshToken.findOne({
      where: {value: refreshToken}})
    if (!refreshTokenInstance) {
      next(createHttpError(404, 'Refresh token not found in DB.'))
    }
    const tokenPair = await AuthService.refreshSession(refreshTokenInstance)
    res.cookie('refreshToken', tokenPair.refresh, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
    });
    res.status(200).send(({ accessToken: tokenPair.accessToken }))
  } catch (error) {
    next(error)
  }
};