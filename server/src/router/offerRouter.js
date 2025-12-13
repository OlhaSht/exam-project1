const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const checkToken = require('../middlewares/checkToken');
const checkAuth = require('../middlewares/authTokenMw');
const upload = require('../utils/fileUpload');
const offerController = require('../controllers/offerController');
const customerOfferController = require('../controllers/customerOfferController');
const router = express.Router();

router.post(
  '/setNewOffer',
  //checkToken.checkToken,
  checkAuth.checkAccessToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  offerController.setNewOffer
);

router.patch(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  offerController.setOfferStatus
);

router.get(
  '/getApprovedOffersForCustomer',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  customerOfferController.getApprovedOffersForCustomer
);

module.exports = router;
