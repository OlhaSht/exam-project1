const Catalog = require("../../../models/Catalog")

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
        return res.status(404).send({ message: 'Catalog not found or not updated' });
      }
  
      res.send(updatedCatalog); 
    } catch (err) {
      next(err); 
    }
  };
  