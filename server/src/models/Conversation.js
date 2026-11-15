module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define(
    'Conversation',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    },
    {
      timestamps: true,
    }
  );

  Conversation.associate = (models) => {
    Conversation.hasMany(models.Message, {
      foreignKey: 'conversationId',
    });
    Conversation.belongsToMany(models.Catalog, {
      foreignKey: 'conversationId',
      through: models.CatalogConversations,
      otherKey: 'catalogId',
    });
    Conversation.belongsToMany(models.Users, {
      foreignKey: 'conversationId',
      through: models.UserConversation,
      otherKey: 'userId',
    });
  };

  return Conversation;
};
