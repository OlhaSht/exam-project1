module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CatalogConversations', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      catalogId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Catalogs',
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
    await queryInterface.addConstraint('CatalogConversations', {
      fields: ['catalogId', 'conversationId'],
      type: 'unique',
      name: 'unique_catalog_conversation_pair',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CatalogConversations');
  },
};
