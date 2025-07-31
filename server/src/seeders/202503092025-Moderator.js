'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');
const CONSTANTS = require('../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = bcrypt.hashSync(process.env.MODERATOR_PASSWORD, CONSTANTS.SALT_ROUNDS); 
    
    return queryInterface.bulkInsert('Users',[{
        id: 3,
        firstName: 'mark',
        lastName: 'mark',
        displayName: 'mark',
        password: hashedPassword, 
        email: 'mark@gmail.com',
        avatar: 'anon.png',
        role: 'moderator',
        balance: 0,
        accessToken: null,
        rating: 0,
      },]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', { email: 'mark@gmail.com' }, {});
   }
  };
