module.exports = (sequelize, DataTypes) => {
    const Conversation = sequelize.define('Conversation', {
      participants: {
        type: DataTypes.ARRAY(DataTypes.INTEGER), // Массив чисел для участников
        allowNull: false,
      },
      blackList: {
        type: DataTypes.ARRAY(DataTypes.BOOLEAN), // Массив булевых значений для черного списка
        allowNull: false,
      },
      favoriteList: {
        type: DataTypes.ARRAY(DataTypes.BOOLEAN), // Массив булевых значений для избранного списка
        allowNull: false,
      },
    }, {
      timestamps: true, // Автоматически добавляем createdAt и updatedAt
    });
  
    // Связь с моделью Message
    Conversation.associate = (models) => {
      Conversation.hasMany(models.Message, { foreignKey: 'conversationId' });
    };
  
    return Conversation;
  };
  