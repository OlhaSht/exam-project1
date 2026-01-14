const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const checkAuth = require('../middlewares/authTokenMw');
const validators = require('../middlewares/validators');
const upload = require('../utils/fileUpload');
const financeController = require('../controllers/financeController');
const router = express.Router();

router.post(
  '/pay',
  checkAuth.checkAccessToken,
  basicMiddlewares.onlyForCustomer,
  upload.uploadContestFiles,
  basicMiddlewares.parseBody,
  validators.validateContestCreation,
  financeController.payment
);

router.post(
  '/cashout',
  checkAuth.checkAccessToken,
  basicMiddlewares.onlyForCreative,
  financeController.cashout
);

router.put(
  '/changeMark',
  checkAuth.checkAccessToken,
  basicMiddlewares.onlyForCustomer,
  financeController.changeMark
);

module.exports = router;
