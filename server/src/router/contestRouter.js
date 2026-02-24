const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const checkAuth = require('../middlewares/authTokenMw');
const contestController = require('../controllers/contestController');
const upload = require('../utils/fileUpload');
const router = express.Router();

router.post(
  '/dataForContest',
  checkAuth.checkAccessToken,
  contestController.dataForContest
);
router.get(
  '/getCustomersContests',
  checkAuth.checkAccessToken,
  contestController.getCustomersContests
);
router.get(
  '/getContestById',
  checkAuth.checkAccessToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById
);
router.get(
  '/getAllContests',
  checkAuth.checkAccessToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests
);
router.put(
  '/updateContest',
  checkAuth.checkAccessToken,
  upload.updateContestFile,
  contestController.updateContest
);
router.get(
  '/downloadFile/:fileName',
  checkAuth.checkAccessToken,
  contestController.downloadFile
);

module.exports = router;
