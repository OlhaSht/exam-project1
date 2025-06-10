const express = require('express');
const userController = require('../controllers/userController');
const checkToken = require('../middlewares/checkToken');
const upload = require('../utils/fileUpload');
const router = express.Router();

router.get(
  '/getUser',
  checkToken.checkAuth,
  // userController.getUser,
);

router.put(
  '/updateUser',
  checkToken.checkToken,
  upload.uploadAvatar,
  userController.updateUser,
);

module.exports = router;