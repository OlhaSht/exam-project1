module.exports = (sequelize, DataTypes) => {
  const Catalog = sequelize.define(
    'Catalog',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      catalogName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Catalog.associate = function (models) {
    Catalog.belongsToMany(models.Conversation, {
      foreignKey: 'catalogId',
      through: models.CatalogConversations,
      otherKey: 'conversationId',
    });
    Catalog.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
  };

  return Catalog;
};
