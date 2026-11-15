module.exports = (sequelize, DataTypes) => {
  const UserConversation = sequelize.define(
    'UserConversation',
    {
      blackList: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      favoriteList: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      conversationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Conversations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  UserConversation.associate = function (models) {
    UserConversation.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
    UserConversation.belongsTo(models.Conversation, {
      foreignKey: 'conversationId',
    });
  };
  return UserConversation;
};
