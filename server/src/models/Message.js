module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      sender: {
        type: DataTypes.INTEGER, // Указываем число вместо Number
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING, // Указываем строку вместо String
        allowNull: false,
      },
      conversationId: {
        type: DataTypes.INTEGER, // foreign key для связи с моделью Conversation
        allowNull: false,
        references: {
          model: 'Conversations', // Указываем таблицу Conversations
          key: 'id',
        },
      },
    }, {
      timestamps: true, // Автоматически добавляем createdAt и updatedAt
    });
  
    // Связь с моделью Conversation
    Message.associate = (models) => {
      Message.belongsTo(models.Conversation, { foreignKey: 'conversationId' });
    };
  
    return Message;
  };
  