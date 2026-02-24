const express = require('express');
const userController = require('../controllers/userController');
const checkAuth = require('../middlewares/authTokenMw');
const upload = require('../utils/fileUpload');
const router = express.Router();

router.get('/getUser', checkAuth.checkAccessToken, userController.getUser);

router.put(
  '/updateUser',
  checkAuth.checkAccessToken,
  upload.uploadAvatar,
  userController.updateUser
);

module.exports = router;
