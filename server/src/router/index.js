const express = require('express');

const authRouter = require('./authRouter');
const catalogRouter = require('./catalogRouter');
const chatRouter = require('./chatRouter');
const contestRouter = require('./contestRouter');
const financeRouter = require('./financeRouter');
const moderatorRouter = require('./moderatorRouter');
const offerRouter = require('./offerRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/catalog', catalogRouter);
router.use('/chat', chatRouter);
router.use('/contest', contestRouter);
router.use('/finance', financeRouter);
router.use('/moderator', moderatorRouter);
router.use('/offer', offerRouter);
router.use('/user', userRouter);

module.exports = router;
