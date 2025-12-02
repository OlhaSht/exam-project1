'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    static associate(models) {
      RefreshToken.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
      });
    }
  }
  RefreshToken.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      ua: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fingerprint: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'RefreshToken',
      tableName: 'RefreshTokens',
    }
  );
  return RefreshToken;
};
