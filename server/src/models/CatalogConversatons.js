module.exports = (sequelize, DataTypes) => {
  const CatalogConversations = sequelize.define(
    'CatalogConversations',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
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
    },
    {
      timestamps: true,
      tableName: 'CatalogConversations',
    }
  );

  return CatalogConversations;
};
