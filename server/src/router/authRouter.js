const express = require('express');
const { checkRefreshToken } = require('../middlewares/authTokenMw');
const validators = require('../middlewares/validators');
const AuthController = require('../controllers/authController');
const router = express.Router();

router.post(
  '/registration',
  validators.validateRegistrationData,
  AuthController.registration,
);

router.post(
  '/login',
  validators.validateLogin,
  AuthController.login,
);

router.post(
  '/refresh', 
  checkRefreshToken, 
  AuthController.refresh
);

router.post(
  '/logout',
  AuthController.logout
 );


module.exports = router;

// module.exports = router;

// const authRouter = require('express').Router();
// const AuthController = require('../controllers/authController');
// const validators = require('../middlewares/validators');
// const { checkRefreshToken } = require('../middlewares/tokenMw');

// authRouter.post('/sign-in', 
//   validators.validateLogin, 
//   AuthController.signIn
// );
// authRouter.post('/sign-up', 
//   validators.validateRegistrationData,
//   AuthController.signUp
// );
// authRouter.post('/refresh', 
//   checkRefreshToken, 
//   AuthController.refresh
// );

// module.exports = authRouter;