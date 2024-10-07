
const { Catalog, Message } = require("../../../models")

module.exports.createCatalog = async (req, res, next) => {
    try {
      const catalog = await Catalog.create({
        userId: req.tokenData.userId,
        catalogName: req.body.catalogName,
        chats: [req.body.chatId],
      });
      res.send(catalog);
    } catch (err) {
      next(err);
    }
  };

  //------------------------------------------------------

  module.exports.updateNameCatalog = async (req, res, next) => {
    try {
      const [updatedRowCount, [updatedCatalog]] = await Catalog.update(
        { catalogName: req.body.catalogName },
        {
          where: {
            id: req.body.catalogId,
            userId: req.tokenData.userId,
          },
          returning: true,
        }
      );
      if (updatedRowCount === 0) {
        return res.status(404).send({ message: 'Catalog not found' });
      }
      res.send(updatedCatalog);
    } catch (err) {
      next(err);
    }
  };

  //----------------------------------------------------------------

  module.exports.addNewChatToCatalog = async (req, res, next) => {
    try {
      const catalog = await Catalog.findByPk(req.body.catalogId);
      if (!catalog) {
        return res.status(404).send({ message: 'Catalog not found' });
      }
      // Добавляем chatId, если его нет
      const updatedChats = [...new Set([...catalog.chats, req.body.chatId])];
      await catalog.update({ chats: updatedChats });
      res.send(catalog);
    } catch (err) {
      next(err);
    }
  };

  //--------------------------------------------------------------

  module.exports.removeChatFromCatalog = async (req, res, next) => {
    try {
      const catalog = await Catalog.findByPk(req.body.catalogId);
      if (!catalog) {
        return res.status(404).send({ message: 'Catalog not found' });
      }
      // Убираем chatId
      const updatedChats = catalog.chats.filter(chatId => chatId !== req.body.chatId);
      await catalog.update({ chats: updatedChats });
      res.send(catalog);
    } catch (err) {
      next(err);
    }
  };

  //-----------------------------------------------------------------

  module.exports.deleteCatalog = async (req, res, next) => {
    try {
      const result = await Catalog.destroy({
        where: {
          id: req.body.catalogId,
          userId: req.tokenData.userId,
        },
      });
      if (result === 0) {
        return res.status(404).send({ message: 'Catalog not found' });
      }
      res.end();
    } catch (err) {
      next(err);
    }
  };

  //---------------------------------------------------------------------------

  module.exports.getCatalogs = async (req, res, next) => {
    try {
      const catalogs = await Catalog.findAll({
        where: { userId: req.tokenData.userId },
        attributes: ['id', 'catalogName', 'chats'],
      });
      res.send(catalogs);
    } catch (err) {
      next(err);
    }
  };
  
  