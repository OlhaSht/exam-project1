module.exports = (sequelize, DataTypes) => {
  const CatalogConversations = sequelize.define('CatalogConversations', {
    catalogId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Catalogs',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    conversationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Conversations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
  }, {
    timestamps: false, // Можно отключить timestamps, если не нужно отслеживать время создания и обновления записей
    tableName: 'CatalogConversations', // Указываем имя таблицы, чтобы соответствовать названию в миграции
  });

  return CatalogConversations;
};



// module.exports = (sequelize, DataTypes) => {
//     const CatalogConversations = sequelize.define('CatalogConversations', {
//       catalogId: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'Catalogs',
//           key: 'id',
//         },
//         allowNull: false,
//       },
//       conversationId: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'Conversations',
//           key: 'id',
//         },
//         allowNull: false,
//       },
//     }, {
//       timestamps: false,
//     });
  
//     return CatalogConversations;
//   };
  