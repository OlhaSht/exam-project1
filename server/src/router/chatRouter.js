const express = require('express');
const checkToken = require('../middlewares/checkToken');
const chatSQL = require('../controllers/chatControllerSQL/chatSQL');
const router = express.Router();

router.post(
  '/newMessage',
  checkToken.checkToken,
  chatSQL.addMessage,
  // chatController.addMessage,
);

router.get(
  '/getChat',
  checkToken.checkToken,
  chatSQL.getChat,
  // chatController.getChat,
);

router.get(
  '/getPreview',
  checkToken.checkToken,
  chatSQL.getPreview,
  // chatController.getPreview,
);

router.put(
  '/blackList',
  checkToken.checkToken,
  chatSQL.blackList,
  // chatController.blackList,
);

router.put(
  '/favorite',
  checkToken.checkToken,
  chatSQL.favoriteChat,
  // chatController.favoriteChat,
);

module.exports = router;