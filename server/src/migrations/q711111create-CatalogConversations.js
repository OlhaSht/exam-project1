module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CatalogConversations', {
      // id: {
      //   type: Sequelize.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true,
      // },
      catalogId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Catalogs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      conversationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Conversations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CatalogConversations');
  },
};




// module.exports = {
//     up: async (queryInterface, Sequelize) => {
//       await queryInterface.createTable('CatalogConversations', {
//         catalogId: {
//           type: Sequelize.INTEGER,
//           references: {
//             model: 'Catalogs',
//             key: 'id',
//           },
//           allowNull: false,
//         },
//         conversationId: {
//           type: Sequelize.INTEGER,
//           references: {
//             model: 'Conversations',
//             key: 'id',
//           },
//           allowNull: false,
//         },
//       });
//     },
//     down: async (queryInterface, Sequelize) => {
//       await queryInterface.dropTable('CatalogConversations');
//     },
//   };
  