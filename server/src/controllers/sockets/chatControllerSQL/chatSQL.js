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

  // module.exports.getPreview = async (req, res, next) => {
  //   try {
  //     // Получаем все беседы с участником, отсортированные по дате последнего сообщения
  //     const conversations = await db.Message.findAll({
  //       include: [{
  //         model: db.Conversation,
  //         where: {
  //           participants: {
  //             [db.Sequelize.Op.contains]: [req.tokenData.userId],  // Используем оператор contains для проверки участников
  //           },
  //         },
  //         attributes: ['id', 'participants', 'blackList', 'favoriteList'], // Возвращаем только необходимые поля
  //       }],
  //       order: [['createdAt', 'DESC']],  // Сортируем по дате создания
  //       group: ['Conversation.id', 'Message.id'],
  //       attributes: [
  //         [db.Sequelize.col('Conversation.id'), '_id'],
  //         'sender',
  //         'body',
  //         'createdAt',
  //         [db.Sequelize.col('Conversation.participants'), 'participants'],
  //         [db.Sequelize.col('Conversation.blackList'), 'blackList'],
  //         [db.Sequelize.col('Conversation.favoriteList'), 'favoriteList'],
  //       ],
  //     });
  
  //     // Получаем ID собеседников
  //     const interlocutors = [];
  //     conversations.forEach(conversation => {
  //       interlocutors.push(conversation.dataValues.participants.find(
  //         (participant) => participant !== req.tokenData.userId));
  //     });
  
  //     // Запрашиваем данные о собеседниках
  //     const senders = await db.Users.findAll({
  //       where: {
  //         id: interlocutors,
  //       },
  //       attributes: ['id', 'firstName', 'lastName', 'displayName', 'avatar'],
  //     });
  
  //     // Добавляем информацию о собеседниках в каждую беседу
  //     conversations.forEach((conversation) => {
  //       senders.forEach(sender => {
  //         if (conversation.participants.includes(sender.dataValues.id)) {
  //           conversation.dataValues.interlocutor = {
  //             id: sender.dataValues.id,
  //             firstName: sender.dataValues.firstName,
  //             lastName: sender.dataValues.lastName,
  //             displayName: sender.dataValues.displayName,
  //             avatar: sender.dataValues.avatar,
  //           };
  //         }
  //       });
  //     });
  
  //     await res.send(conversations);
  //   } catch (err) {
  //     next(err);
  //   }
  // };
  

  // module.exports.getPreview = async (req, res, next) => {
  //   try {
  //     const userId = req.tokenData.userId;
  
  //     // Выполняем запрос для получения всех бесед и последних сообщений
  //     const conversations = await db.Message.findAll({
  //       include: [{
  //         model: db.Conversation,
  //         as: 'conversationData',
  //         where: {
  //           participants: {
  //             [db.Sequelize.Op.contains]: [userId],  // Проверяем, что участник присутствует
  //           },
  //         },
  //       }],
  //       order: [['createdAt', 'DESC']],  // Сортировка по дате создания сообщений
  //       group: ['conversationData.id', 'Message.id'],
  //       attributes: [
  //         'conversationId', 'sender', 'body', 'createdAt',
  //         [db.Sequelize.fn('array_agg', db.Sequelize.col('conversationData.participants')), 'participants'],
  //         [db.Sequelize.fn('array_agg', db.Sequelize.col('conversationData.blackList')), 'blackList'],
  //         [db.Sequelize.fn('array_agg', db.Sequelize.col('conversationData.favoriteList')), 'favoriteList'],
  //       ],
  //     });
  
  //     const interlocutors = [];
  //     conversations.forEach(conversation => {
  //       const participants = conversation.dataValues.participants[0]; // array_agg вернет массив
  //       interlocutors.push(participants.find(participant => participant !== userId));
  //     });
  
  //     // Получаем данные о собеседниках
  //     const senders = await db.Users.findAll({
  //       where: {
  //         id: interlocutors,
  //       },
  //       attributes: ['id', 'firstName', 'lastName', 'displayName', 'avatar'],
  //     });
  
  //     // Добавляем информацию о собеседниках в разговоры
  //     conversations.forEach((conversation) => {
  //       senders.forEach(sender => {
  //         if (conversation.dataValues.participants[0].includes(sender.dataValues.id)) {
  //           conversation.dataValues.interlocutor = {
  //             id: sender.dataValues.id,
  //             firstName: sender.dataValues.firstName,
  //             lastName: sender.dataValues.lastName,
  //             displayName: sender.dataValues.displayName,
  //             avatar: sender.dataValues.avatar,
  //           };
  //         }
  //       });
  //     });
  
  //     await res.send(conversations);
  //   } catch (err) {
  //     next(err);
  //   }
  // };
  

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
  
  // module.exports.getPreview = async (req, res, next) => {
  //   try {
  //     console.log('Fetching conversations for user:', req.tokenData.userId);
  
  //     const conversations = await Message.findAll({
  //       include: [{
  //         model: Conversation,
  //         where: {
  //           participants: { [Op.contains]: [req.tokenData.userId] }, // Участие пользователя
  //         },
  //         attributes: ['id', 'participants', 'blackList', 'favoriteList'],
  //       }],
  //       order: [['createdAt', 'DESC']],
  //       group: ['Conversation.id'],
  //       attributes: [
  //         'conversationId',
  //         [sequelize.fn('FIRST', sequelize.col('sender')), 'sender'],
  //         [sequelize.fn('FIRST', sequelize.col('body')), 'text'],
  //         [sequelize.fn('FIRST', sequelize.col('createdAt')), 'createAt'],
  //       ],
  //     });
  
  //     console.log('Conversations fetched:', conversations);
  
  //     const interlocutors = conversations.map(convo =>
  //       convo.Conversation.participants.find(p => p !== req.tokenData.userId)
  //     );
  //     console.log('Interlocutors:', interlocutors);
  
  //     const senders = await Users.findAll({
  //       where: { id: interlocutors },
  //       attributes: ['id', 'firstName', 'lastName', 'displayName', 'avatar'],
  //     });
  
  //     console.log('Senders:', senders);
  
  //     conversations.forEach(convo => {
  //       console.log('Current conversation:', convo);
  //       const sender = senders.find(s => convo.Conversation.participants.includes(s.id));
  //       if (sender) {
  //         console.log('Found sender:', sender);
  //         convo.dataValues.interlocutor = sender;
  //       }
  //     });
  
  //     console.log('Final conversations:', conversations);
  //     res.send(conversations);
  //   } catch (err) {
  //     console.log('Error:', err); // Лог ошибки
  //     next(err);
  //   }
  // };
  

  //---------------------------------------------------------------------

  module.exports.blackList = async (req, res, next) => {
    const index = req.body.participants.indexOf(req.tokenData.userId);
    try {
      const chat = await Conversation.update(
        { [`blackList[${index}]`]: req.body.blackListFlag },
        {
          where: { participants: req.body.participants },
          returning: true,
        }
      );
      
      const interlocutorId = req.body.participants.find(p => p !== req.tokenData.userId);
      controller.getChatController().emitChangeBlockStatus(interlocutorId, chat);
  
      res.send(chat);
    } catch (err) {
      res.send(err);
    }
  };

  //-------------------------------------------------------------------------

  module.exports.favoriteChat = async (req, res, next) => {
    const index = req.body.participants.indexOf(req.tokenData.userId);
    try {
      const chat = await Conversation.update(
        { [`favoriteList[${index}]`]: req.body.favoriteFlag },
        {
          where: { participants: req.body.participants },
          returning: true,
        }
      );
      console.log('=======================', chat);
      res.send(chat);
    } catch (err) {
      res.send(err);
    }
  };
  // module.exports.favoriteChat = async (req, res, next) => {
  //   const index = req.body.participants.indexOf(req.tokenData.userId);
  //   try {
  //     // Шаг 1: Обновление записи
  //     await Conversation.update(
  //       { [`favoriteList[${index}]`]: req.body.favoriteFlag },
  //       {
  //         where: { participants: req.body.participants },
  //       }
  //     );
  
  //     // Шаг 2: Поиск обновлённой записи
  //     const updatedChat = await Conversation.findOne({
  //       where: { participants: req.body.participants },
  //     });
  
  //     // Отправка обновленной записи в ответ
  //     res.send(updatedChat);
  //   } catch (err) {
  //     res.send(err);
  //   }
  // };
  