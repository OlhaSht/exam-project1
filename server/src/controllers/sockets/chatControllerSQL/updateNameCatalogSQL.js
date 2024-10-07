const Catalog = require("../../../models/Catalog")

module.exports.updateNameCatalog = async (req, res, next) => {
    try {
      // Обновление названия каталога
      const [updatedRowCount, [updatedCatalog]] = await Catalog.update(
        { catalogName: req.body.catalogName }, // Новое значение
        {
          where: {
            id: req.body.catalogId,         // Идентификатор каталога
            userId: req.tokenData.userId,   // Идентификатор пользователя
          },
          returning: true, // Возвращаем обновленную запись
        }
      );
  
      if (updatedRowCount === 0) {
        return res.status(404).send({ message: 'Catalog not found or not updated' });
      }
  
      res.send(updatedCatalog); // Отправка обновленного каталога
    } catch (err) {
      next(err); // Обработка ошибок
    }
  };
  