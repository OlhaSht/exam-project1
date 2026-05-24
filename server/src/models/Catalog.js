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
      chats: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.getConversations();
        },
      },
    },
    {
      timestamps: false,
    }
  );

  Catalog.associate = function (models) {
    Catalog.belongsToMany(models.Conversation, {
      foreignKey: 'catalogId',
      through: 'CatalogConversations',
      otherKey: 'conversationId',
    });
    Catalog.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
  };

  return Catalog;
};
