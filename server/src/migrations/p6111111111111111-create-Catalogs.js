module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Catalogs', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        catalogName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Catalogs');
    },
  };
  