module.exports = (sequelize, DataTypes) => {
    const CatalogConversations = sequelize.define('CatalogConversations', {
      catalogId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Catalogs',
          key: 'id',
        },
        allowNull: false,
      },
      conversationId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Conversations',
          key: 'id',
        },
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  
    return CatalogConversations;
  };
  