module.exports = (sequelize, DataTypes) => {
    const Conversation = sequelize.define('Conversation', {
      participants: {
        type: DataTypes.ARRAY(DataTypes.INTEGER), 
        allowNull: false,
      },
      blackList: {
        type: DataTypes.ARRAY(DataTypes.BOOLEAN), 
        allowNull: false,
      },
      favoriteList: {
        type: DataTypes.ARRAY(DataTypes.BOOLEAN), 
        allowNull: false,
      },
    }, {
      timestamps: true, 
    });
    
    Conversation.associate = (models) => {
      Conversation.hasMany(models.Message, { foreignKey: 'conversationId' });
    };
  
    return Conversation;
  };
  