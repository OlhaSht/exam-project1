const express = require('express');
const checkAuth = require('../middlewares/authTokenMw');
const chatSQL = require('../controllers/chatControllerSQL/chatSQL');
const router = express.Router();

router.post('/newMessage', checkAuth.checkAccessToken, chatSQL.addMessage);

router.get('/getChat', checkAuth.checkAccessToken, chatSQL.getChat);

router.get('/getPreview', checkAuth.checkAccessToken, chatSQL.getPreview);

router.put('/blackList', checkAuth.checkAccessToken, chatSQL.blackList);

router.put('/favorite', checkAuth.checkAccessToken, chatSQL.favoriteChat);

module.exports = router;
