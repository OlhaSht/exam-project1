const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const checkToken = require('../middlewares/checkToken');
const contestController = require('../controllers/contestController');
const upload = require('../utils/fileUpload');
const router = express.Router();

router.post(
    '/dataForContest',
    checkToken.checkToken,
    contestController.dataForContest,
  );
router.get(
    '/getCustomersContests',
    checkToken.checkToken,
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
    checkToken.checkToken,
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