const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../constants');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'anon.png',
    },
    role: {
      type: DataTypes.ENUM('customer', 'creator', 'moderator'),
      allowNull: false,
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    }, {
        timestamps: false,
    });
    console.log('User model:', User);

  User.associate = function (models) {
    User.hasMany(models.Message, { foreignKey: 'sender', sourceKey: 'id' });
  };
 
  User.beforeCreate(async (user, options) => {
    if (user.password) {
      const hashedPass = await bcrypt.hash(user.password, SALT_ROUNDS);
      user.password = hashedPass;
    }
  });

  User.beforeUpdate(async (user, options) => {
    if (user.changed('password')) {
      const hashedPass = await bcrypt.hash(user.password, SALT_ROUNDS);
      user.password = hashedPass;
    }
  });
 
  User.prototype.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};
