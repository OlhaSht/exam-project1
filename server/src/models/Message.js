module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', 
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
        model: 'Conversations', 
        key: 'id',
      },
    },
  }, {
    timestamps: true,
  });
  
    Message.associate = (models) => {
    Message.belongsTo(models.Users, { foreignKey: 'sender' });
    Message.belongsTo(models.Conversation, { foreignKey: 'conversationId' });
  };

  return Message;
};
