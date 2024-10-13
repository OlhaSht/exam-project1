module.exports = (sequelize, DataTypes) => {
    const Catalog = sequelize.define('Catalog', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      catalogName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      chats: {
        type: DataTypes.VIRTUAL, // Используем VIRTUAL, так как данные будут получены через ассоциацию
        get() {
          // Получаем чаты через ассоциацию
          return this.getConversations();
        },
      },
    }, {
      timestamps: false, // Отключаем timestamps для этой модели
    });
  
    // Связь с моделью Conversation
    Catalog.associate = (models) => {
      Catalog.belongsToMany(models.Conversation, {
        through: 'CatalogConversations', // Дополнительная таблица для связи
        foreignKey: 'catalogId',
        otherKey: 'conversationId',
      });
    };
  
    return Catalog;
  };
  