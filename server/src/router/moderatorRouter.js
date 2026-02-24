const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const checkAuth = require('../middlewares/authTokenMw');
const moderatorController = require('../controllers/moderatorController');

const router = express.Router();

router.get(
  '/getAllOffersForModerator',
  checkAuth.checkAccessToken,
  basicMiddlewares.onlyForModerator,
  moderatorController.getAllOffersForModerator
);

router.put(
  '/approveOfferByModerator/:id',
  checkAuth.checkAccessToken,
  basicMiddlewares.onlyForModerator,
  moderatorController.approveOfferByModerator
);

router.put(
  '/rejectOfferByModerator/:id',
  checkAuth.checkAccessToken,
  basicMiddlewares.onlyForModerator,
  moderatorController.rejectOfferByModerator
);

router.post('./sendEmail', moderatorController.sendEmail);

module.exports = router;
