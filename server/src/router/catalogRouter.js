const express = require('express');
const checkAuth = require('../middlewares/authTokenMw');
const catalogSQL = require('../controllers/chatControllerSQL/catalogSQL');

const router = express.Router();

router.post(
  '/createCatalog',
  checkAuth.checkAccessToken,
  catalogSQL.createCatalog
);

router.get('/getCatalogs', checkAuth.checkAccessToken, catalogSQL.getCatalogs);

router.put(
  '/updateNameCatalog/:catalogId',
  checkAuth.checkAccessToken,
  catalogSQL.updateNameCatalog
);

router.post(
  '/addNewChatToCatalog/:catalogId',
  checkAuth.checkAccessToken,
  catalogSQL.addNewChatToCatalog
);

router.delete(
  '/removeChatFromCatalog',
  checkAuth.checkAccessToken,
  catalogSQL.removeChatFromCatalog
);

router.delete(
  '/deleteCatalog',
  checkAuth.checkAccessToken,
  catalogSQL.deleteCatalog
);

module.exports = router;
