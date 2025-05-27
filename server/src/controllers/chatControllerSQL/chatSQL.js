const { Message, Conversation, Users } = require('../../models');
const controller = require('../../socketInit');
const { Op } = require('sequelize');
const db = require('../../models');



module.exports.addMessage = async (req, res, next) => {
    const participants = [req.tokenData.userId, req.body.recipient].sort();
    try {
      const [newConversation, created] = await Conversation.findOrCreate({
        where: { participants },
        defaults: { blackList: [false, false], favoriteList: [false, false] },
      });
      
      const message = await Message.create({
        sender: req.tokenData.userId,
        body: req.body.messageBody,
        conversationId: newConversation.id,
      });
        console.log('message =============================')
      const interlocutorId = participants.find(p => p !== req.tokenData.userId);
      
      controller.getChatController().emitNewMessage(interlocutorId, {
        message,
        preview: {
          _id: newConversation.id,
          sender: req.tokenData.userId,
          text: req.body.messageBody,
          createAt: message.createdAt,
          participants,
          blackList: newConversation.blackList,
          favoriteList: newConversation.favoriteList,
          interlocutor: {
            id: req.tokenData.userId,
            firstName: req.tokenData.firstName,
            lastName: req.tokenData.lastName,
            displayName: req.tokenData.displayName,
            avatar: req.tokenData.avatar,
            email: req.tokenData.email,
          },
        },
      });
  
      await res.send({
        message,
        preview: { ...message.dataValues, interlocutor: req.body.interlocutor },
      });
    } catch (err) {
      console.log('Error===========================:', err);
      next(err);
    }
  };

  //-----------------------------------------------------------------------------------

  module.exports.getChat = async (req, res, next) => {
    const participants = [req.tokenData.userId, req.body.interlocutorId].sort();
    try {
      const messages = await Message.findAll({
        include: [{
          model: Conversation,
          where: { participants },
          attributes: [], 
        }],
        order: [['createdAt', 'ASC']],
        attributes: ['id', 'sender', 'body', 'conversationId', 'createdAt', 'updatedAt'],
      });
      
      const interlocutor = await Users.findOne({
        where: { id: req.body.interlocutorId },
        attributes: ['id', 'firstName', 'lastName', 'displayName', 'avatar'],
      });
  
      res.send({ messages, interlocutor });
    } catch (err) {
      next(err);
    }
  };

  //----------------------------------------------------------------------------------

  module.exports.getPreview = async (req, res, next) => {
    try {
      console.log('Fetching conversations for user=================:', req.tokenData.userId);
  
      const conversations = await Message.findAll({
        include: [{
          model: Conversation,
          where: {
            participants: { [Op.contains]: [req.tokenData.userId] },
          },
          attributes: ['id', 'participants', 'blackList', 'favoriteList'],
        }],
        order: [['createdAt', 'DESC']],
        attributes: [
          'conversationId', 'sender', 'body', 'createdAt',
        ],
      });
  
      console.log('Conversations fetched========================:', conversations);
  
      const interlocutors = conversations.map(convo =>
        convo.Conversation.participants.find(p => p !== req.tokenData.userId)
      );
      console.log('Interlocutors:', interlocutors);
  
      const senders = await Users.findAll({
        where: { id: interlocutors },
        attributes: ['id', 'firstName', 'lastName', 'displayName', 'avatar'],
      });
  
      console.log('Senders======================:', senders);
  
      conversations.forEach(convo => {
        console.log('Current conversation:', convo);
        const sender = senders.find(s => convo.Conversation.participants.includes(s.id));
        if (sender) {
          console.log('Found sender:', sender);
          convo.dataValues.interlocutor = sender;
        }
      });
  
      console.log('Final conversations====================:', conversations);
      
      await res.send(conversations);
    } catch (err) {
      console.log('Error===========================:', err);
      next(err);
    }
  };
  
  //---------------------------------------------------------------------

  module.exports.blackList = async (req, res, next) => {
    try {
      const sortedParticipants = [...req.body.participants].sort((a, b) => a - b);
      const index = sortedParticipants.indexOf(req.tokenData.userId);
  
      const conversation = await Conversation.findOne({
        where: { participants: sortedParticipants },
      });
  
      if (!conversation) {
        return res.status(404).send({ message: 'Conversation not found' });
      }
      
      const updatedBlackList = [...conversation.blackList];
      console.log('----', updatedBlackList)
      console.log('Value of blackListFlag:', req.body.blackListFlag);
      updatedBlackList[index] = req.body.blackListFlag;
  
      conversation.blackList = updatedBlackList;
      await conversation.save(); 
  
      res.send(conversation);
    } catch (err) {
      console.error('Error updating conversation:', err);
      res.status(500).send({ message: 'Server error', error: err });
    }
  };
  
  module.exports.favoriteChat = async (req, res, next) => {
    try {
      const sortedParticipants = [...req.body.participants].sort((a, b) => a - b);
      const index = sortedParticipants.indexOf(req.tokenData.userId);
  
      const conversation = await Conversation.findOne({
        where: { participants: sortedParticipants },
      });
  
      if (!conversation) {
        return res.status(404).send({ message: 'Conversation not found' });
      }
      
      const updatedFavoriteList = [...conversation.favoriteList];
      // console.log('----', updatedFavoriteList)
      // console.log("Favorite Flag://///", req.body.favoriteFlag);
      updatedFavoriteList[index] = req.body.favoriteFlag;
  
      conversation.favoriteList = updatedFavoriteList;
      await conversation.save(); 
  
      res.send(conversation);
    } catch (err) {
      console.error('Error updating conversation:', err);
      res.status(500).send({ message: 'Server error', error: err });
    }
  };
  


