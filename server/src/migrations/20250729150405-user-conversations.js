module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserConversations', {
      blackList: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      favoriteList: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      conversationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Conversations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
    await queryInterface.addConstraint('UserConversations', {
      fields: ['userId', 'conversationId'],
      type: 'primary key',
      name: 'user_conversation_pkey',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserConversations');
  },
};
