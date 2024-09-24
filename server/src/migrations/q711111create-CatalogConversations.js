module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('CatalogConversations', {
        catalogId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Catalogs',
            key: 'id',
          },
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
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('CatalogConversations');
    },
  };
  