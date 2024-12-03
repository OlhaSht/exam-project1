const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const hashPass = require('../middlewares/hashPassMiddle');
const userController = require('../controllers/userController');
const contestController = require('../controllers/contestController');
const checkToken = require('../middlewares/checkToken');
const validators = require('../middlewares/validators');
// const chatController = require('../controllers/chatController');
const chatSQL = require('../controllers/sockets/chatControllerSQL/chatSQL');
const catalogSQL = require('../controllers/sockets/chatControllerSQL/catalogSQL');
const upload = require('../utils/fileUpload');
const offerController = require('../controllers/offersController')
const moderatorController = require('../controllers/moderatorController');
const router = express.Router();

router.post(
  '/registration',
  validators.validateRegistrationData,
  hashPass,
  userController.registration,
);

router.post(
  '/login',
  validators.validateLogin,
  userController.login,
);

router.post(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest,
);

router.post(
  '/pay',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  upload.uploadContestFiles,
  basicMiddlewares.parseBody,
  validators.validateContestCreation,
  userController.payment,
);

router.post(
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

router.post(
  '/getAllContests',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests,
);

router.post(
  '/getUser',
  checkToken.checkAuth,
);

router.get(
  '/downloadFile/:fileName',
  checkToken.checkToken,
  contestController.downloadFile,
);

router.post(
  '/updateContest',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest,
);

router.post(
  '/setNewOffer',
  checkToken.checkToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer,
);

router.post(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus,
);

router.post(
  '/changeMark',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  userController.changeMark,
);

router.post(
  '/updateUser',
  checkToken.checkToken,
  upload.uploadAvatar,
  userController.updateUser,
);

router.post(
  '/cashout',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  userController.cashout,
);

router.post(
  '/newMessage',
  checkToken.checkToken,
  chatSQL.addMessage,
  // chatController.addMessage,
);

router.post(
  '/getChat',
  checkToken.checkToken,
  chatSQL.getChat,
  // chatController.getChat,
);

router.post(
  '/getPreview',
  checkToken.checkToken,
  chatSQL.getPreview,
  // chatController.getPreview,
);

router.post(
  '/blackList',
  checkToken.checkToken,
  chatSQL.blackList,
  // chatController.blackList,
);

router.post(
  '/favorite',
  checkToken.checkToken,
  chatSQL.favoriteChat,
  // chatController.favoriteChat,
);

router.post(
  '/createCatalog',
  checkToken.checkToken,
  catalogSQL.createCatalog,
  // chatController.createCatalog,
);

router.post(
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

router.post(
  '/removeChatFromCatalog',
  checkToken.checkToken,
  catalogSQL.removeChatFromCatalog,
  // chatController.removeChatFromCatalog,
);

router.post(
  '/deleteCatalog',
  checkToken.checkToken,
  catalogSQL.deleteCatalog,
  // chatController.deleteCatalog,
);

router.post(
  '/getCatalogs',
  checkToken.checkToken,
  catalogSQL.getCatalogs,
  // chatController.getCatalogs,
);

// router.get(
//   '/getAllOffers',
//   checkToken.checkToken,
//   basicMiddlewares.onlyForModerator,
//   moderatorController.getAllOffers
// );

// router.post(
//   '/approveOffer',
//   checkToken.checkToken,
//   basicMiddlewares.onlyForModerator,
//   moderatorController.approveOffer
// );

// router.put(
//   '/rejectOffer',
//   checkToken.checkToken,
//   basicMiddlewares.onlyForModerator,
//   moderatorController.rejectOffer
// );

router.get(
  '/getAllOffers',
  checkToken.checkToken,
  offerController.getAllOffers
);
router.get(
  '/updateOfferStatus',
  checkToken.checkToken,
  offerController.updateOfferStatus
);
router.post(
  '/getMyOffers',
  checkToken.checkToken,
  offerController.getMyOffers
);
router.patch(
  '/createOffer',
  checkToken.checkToken,
  offerController.createOffer
);

module.exports = router;
