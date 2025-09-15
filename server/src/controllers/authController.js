const { Users, RefreshToken } = require('../models')
const AuthService = require('../services/authService')
const {RefreshTokenMissingError, RefreshTokenNotFoundError} = require('../errors/RefreshTokenErrors')
const {InvalidUserAuthentication, InvalidUserData, RefreshTokenNotProvidedError} = require('../errors/AuthTokenError')
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
      res.cookie('refreshToken', data.tokenPair.refresh, {
        httpOnly: false,
        secure: false,
        path: '/', 
        // secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
      })

      return res.status(200).send({accessToken:data.tokenPair.access})
    }
    next(new InvalidUserAuthentication())
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
      res.cookie('refreshToken', data.tokenPair.refresh, {
        httpOnly: false,
        secure: false,
        path: '/',
        // secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
      })
      console.log(':::::::::::', data);
      return res.status(200).send({accessToken:data.tokenPair.access})
    }
    next(new InvalidUserData());
  } catch (error) {
    next(error)
  }
};
module.exports.refresh = async (req, res, next) => {
  try {
    // const {body: { refreshToken } } = req 
    const refreshToken = req.cookies?.refreshToken;
    console.log('refreshToken-----', refreshToken)
    if (!refreshToken) {
      return next(new RefreshTokenMissingError());
    }
    const refreshTokenInstance = await RefreshToken.findOne({
      where: {value: refreshToken}})
      console.log('🍪 RefreshToken, который пришел из куки:', req.cookies?.refreshToken);
      console.log('🍪 RefreshToken, который пришел из базы данных:', refreshTokenInstance);
      console.log('req.cookies.refreshToken:', req.cookies.refreshToken, req.cookies.refreshToken?.length);
      console.log('DB token length:', (await RefreshToken.findOne())?.value.length);

    if (!refreshTokenInstance) {
      return next(new RefreshTokenNotFoundError());
    }
    const data = await AuthService.refreshSession(refreshTokenInstance)
    console.log('refreshTokenInstance-----', data)
    console.log('🔄 Новый refreshToken, который ставим в куку:', data.tokenPair.refresh);
    res.cookie('refreshToken', data.tokenPair.refresh, {
      httpOnly: false,
      path: '/',
      //path: '/auth/refresh',
      // secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      secure: false,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
    });
    console.log('tokenPair:::::::::::::::::', data);
    res.status(200).send({
      accessToken: data.tokenPair.access
      });
    
  } catch (error) {
    next(error)
  }
};

module.exports.logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return next(new RefreshTokenNotProvidedError());
    }
    await RefreshToken.destroy({
      where: {value: refreshToken}
    });
    
    res.clearCookie('refreshToken', {
      httpOnly: true,
      sameSite: 'strict',
      secure: false, 
      path: '/',
    });

    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    next(error);
  }
};
