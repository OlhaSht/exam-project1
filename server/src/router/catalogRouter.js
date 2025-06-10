const express = require('express');
const checkToken = require('../middlewares/checkToken');
const catalogSQL = require('../controllers/chatControllerSQL/catalogSQL');

const router = express.Router();

router.post(
'/createCatalog',
checkToken.checkToken,
catalogSQL.createCatalog,
// chatController.createCatalog,
);

router.get(
'/getCatalogs',
checkToken.checkToken,
catalogSQL.getCatalogs,
// chatController.getCatalogs,
);

router.put(
'/updateNameCatalog',
checkToken.checkToken,
catalogSQL.updateNameCatalog,
// chatController.updateNameCatalog,
);

router.post(
'/addNewChatToCatalog',
checkToken.checkToken,
catalogSQL.addNewChatToCatalog,
// chatController.addNewChatToCatalog,
);

router.delete(
'/removeChatFromCatalog',
checkToken.checkToken,
catalogSQL.removeChatFromCatalog,
// chatController.removeChatFromCatalog,
);

router.delete(
'/deleteCatalog',
checkToken.checkToken,
catalogSQL.deleteCatalog,
// chatController.deleteCatalog,
);
  
module.exports = router;