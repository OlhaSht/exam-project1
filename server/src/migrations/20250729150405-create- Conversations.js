module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Conversations', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        participants: {
          type: Sequelize.ARRAY(Sequelize.INTEGER),
          allowNull: false,
        },
        blackList: {
          type: Sequelize.ARRAY(Sequelize.BOOLEAN),
          allowNull: false,
        },
        favoriteList: {
          type: Sequelize.ARRAY(Sequelize.BOOLEAN),
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
      await queryInterface.dropTable('Conversations');
    },
  };
  