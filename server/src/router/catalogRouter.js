const express = require('express');
const checkToken = require('../middlewares/checkToken');
const checkAuth = require('../middlewares/authTokenMw');
const catalogSQL = require('../controllers/chatControllerSQL/catalogSQL');

const router = express.Router();

router.post(
  '/createCatalog',
  checkToken.checkToken,
  catalogSQL.createCatalog
  // chatController.createCatalog,
);

router.get(
  '/getCatalogs',
  checkToken.checkToken,
  catalogSQL.getCatalogs
  // chatController.getCatalogs,
);

router.put(
  '/updateNameCatalog/:catalogId',
  //checkToken.checkToken,
  checkAuth.checkAccessToken,
  catalogSQL.updateNameCatalog
);

router.post(
  '/addNewChatToCatalog/:catalogId',
  checkAuth.checkAccessToken,
  //checkToken.checkToken,
  catalogSQL.addNewChatToCatalog
  // chatController.addNewChatToCatalog,
);

router.delete(
  '/removeChatFromCatalog',
  checkToken.checkToken,
  catalogSQL.removeChatFromCatalog
  // chatController.removeChatFromCatalog,
);

router.delete(
  '/deleteCatalog',
  checkToken.checkToken,
  catalogSQL.deleteCatalog
  // chatController.deleteCatalog,
);

module.exports = router;
