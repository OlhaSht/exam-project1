const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const checkAuth = require('../middlewares/authTokenMw');
const upload = require('../utils/fileUpload');
const offerController = require('../controllers/offerController');
const customerOfferController = require('../controllers/customerOfferController');
const router = express.Router();

router.post(
  '/setNewOffer',
  checkAuth.checkAccessToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  offerController.setNewOffer
);

router.patch(
  '/setOfferStatus',
  checkAuth.checkAccessToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  offerController.setOfferStatus
);

router.get(
  '/getApprovedOffersForCustomer',
  checkAuth.checkAccessToken,
  basicMiddlewares.onlyForCustomer,
  customerOfferController.getApprovedOffersForCustomer
);

module.exports = router;
