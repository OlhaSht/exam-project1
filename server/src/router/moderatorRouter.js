const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const checkToken = require('../middlewares/checkToken');
const checkAuth = require('../middlewares/authTokenMw');
const moderatorController = require('../controllers/moderatorController');

const router = express.Router();

router.get(
  '/getAllOffersForModerator',
  //checkToken.checkToken,
  checkAuth.checkAccessToken,
  basicMiddlewares.onlyForModerator,
  moderatorController.getAllOffersForModerator
);

router.put(
  '/approveOfferByModerator/:id',
  checkToken.checkToken,
  basicMiddlewares.onlyForModerator,
  moderatorController.approveOfferByModerator
);

router.put(
  '/rejectOfferByModerator/:id',
  checkToken.checkToken,
  basicMiddlewares.onlyForModerator,
  moderatorController.rejectOfferByModerator
);

router.post('./sendEmail', moderatorController.sendEmail);

module.exports = router;
