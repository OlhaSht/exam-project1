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

