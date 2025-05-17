module.exports = (sequelize, DataTypes) => {
    const Catalog = sequelize.define('Catalog', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      catalogName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      chats: {
        type: DataTypes.VIRTUAL, 
        get() {
          return this.getConversations();
        },
      },
    }, {
      timestamps: false, 
    });
    
    Catalog.associate = (models) => {
      Catalog.belongsToMany(models.Conversation, {
        through: 'CatalogConversations', 
        foreignKey: 'catalogId',
        otherKey: 'conversationId',
      });
    };
  
    return Catalog;
  };
  