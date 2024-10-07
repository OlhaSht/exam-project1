module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Указываем таблицу Users
        key: 'id',
      },
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conversationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Conversations', // Указываем таблицу Conversations
        key: 'id',
      },
    },
  }, {
    timestamps: true,
  });

  // Связываем сообщения с пользователями через поле sender
    Message.associate = (models) => {
    Message.belongsTo(models.Users, { foreignKey: 'sender' });
    Message.belongsTo(models.Conversation, { foreignKey: 'conversationId' });
  };

  return Message;
};
