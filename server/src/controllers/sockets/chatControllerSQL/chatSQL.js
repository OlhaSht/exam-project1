// const db = require ('../../../models');
const { Message, Conversation, Users } = require('../../../models');
const controller = require('../../../socketInit');
const { Op } = require('sequelize');
const db = require('../../../models');



module.exports.addMessage = async (req, res, next) => {
    const participants = [req.tokenData.userId, req.body.recipient].sort();
    try {
      // Найдем или создадим новую беседу
      const [newConversation, created] = await Conversation.findOrCreate({
        where: { participants },
        defaults: { blackList: [false, false], favoriteList: [false, false] },
      });
  
      // Создадим новое сообщение
      const message = await Message.create({
        sender: req.tokenData.userId,
        body: req.body.messageBody,
        conversationId: newConversation.id,
      });
        console.log('message =============================')
      // Найдем собеседника
      const interlocutorId = participants.find(p => p !== req.tokenData.userId);
  
      // Эмитируем событие (использование этого метода зависит от вашего websocket)
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
      // Получаем все сообщения в рамках беседы
      const messages = await Message.findAll({
        include: [{
          model: Conversation,
          where: { participants },
          attributes: [], // Не нужно включать данные беседы
        }],
        order: [['createdAt', 'ASC']],
        attributes: ['id', 'sender', 'body', 'conversationId', 'createdAt', 'updatedAt'],
      });
  
      // Получаем данные собеседника
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
    const index = req.body.participants.indexOf(req.tokenData.userId);
    try {
      const chat = await Conversation.update(               //заменила update на findOne    
        { [`blackList[${index}]`]: req.body.blackListFlag },
        {
          where: { participants: req.body.participants },
          returning: true,
        }
      );
      
      const interlocutorId = req.body.participants.find(p => p !== req.tokenData.userId);
      controller.getChatController().emitChangeBlockStatus(interlocutorId, chat);
  
      await res.send(chat);
    } catch (err) {
      res.send(err);
    }
  };

  // module.exports.favoriteChat = async (req, res, next) => {
  //   try {
  //     // Убедимся, что участники отсортированы по возрастанию для согласованности
  //     const sortedParticipants = req.body.participants.sort((a, b) => a - b);
  //     const userId = req.tokenData.userId;
  
  //     // Найдем индекс пользователя в массиве `favoriteList`, где его ID соответствует текущему `userId`
  //     const conversation = await Conversation.findOne({
  //       where: { participants: sortedParticipants },
  //     });
  //     console.log('....',conversation )
  
  //     if (!conversation) {
  //       return res.status(404).send({ message: 'Conversation not found' });
  //     }
  
  //     const index = conversation.participants.findIndex(
  //       (participant) => participant === userId
  //     );
  
  //     if (index === -1) {
  //       return res.status(400).send({ message: 'User is not a participant in the conversation' });
  //     }
  
  //     // Обновляем нужный элемент в массиве `favoriteList` по найденному индексу
  //     conversation.favoriteList[index] = req.body.favoriteFlag;
  
  //     // Сохраняем обновленную беседу
  //     await conversation.save();
  
  //     await res.send(conversation);
  //   } catch (err) {
  //     console.error('Error updating conversation:', err);
  //     res.status(500).send({ message: 'Server error', error: err });
  //   }
  // };
  
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
  
      // Обновляем favoriteList вручную, чтобы избежать проблем с индексами
      const updatedFavoriteList = [...conversation.favoriteList];
      console.log('----', updatedFavoriteList)
      updatedFavoriteList[index] = req.body.favoriteFlag;
  
      conversation.favoriteList = updatedFavoriteList;
      await conversation.save(); // сохраняем изменения
  
      res.send(conversation);
    } catch (err) {
      console.error('Error updating conversation:', err);
      res.status(500).send({ message: 'Server error', error: err });
    }
  };
  