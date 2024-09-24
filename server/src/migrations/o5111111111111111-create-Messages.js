module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Messages', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        sender: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        body: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        conversationId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Conversations',
            key: 'id',
          },
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('NOW()'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('NOW()'),
        },
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Messages');
    },
  };
  