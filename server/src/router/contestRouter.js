const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const checkToken = require('../middlewares/checkToken');
const checkAuth = require('../middlewares/authTokenMw');
const contestController = require('../controllers/contestController');
const upload = require('../utils/fileUpload');
const router = express.Router();

router.post(
    '/dataForContest',
    checkAuth.checkAccessToken,
    contestController.dataForContest,
  );
router.get(
    '/getCustomersContests',
    checkAuth.checkAccessToken,
    contestController.getCustomersContests,
  );
router.get(
  '/getContestById',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById,
);
router.get(
    '/getAllContests',
     checkAuth.checkAccessToken,
    basicMiddlewares.onlyForCreative,
    contestController.getContests,
  );
router.put(
  '/updateContest',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest,
);
router.get(
    '/downloadFile/:fileName',
    checkToken.checkToken,
    contestController.downloadFile,
  );

  module.exports = router;