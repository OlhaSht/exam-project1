'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Users', [{
//       id: 3,  
//       firstName: 'mark',
//       lastName: 'mark',
//       displayName: 'mark',
//       password: '$2b$05$rkkLdnqVnLLHMlNtUJCc9uLnaENzzyHAilj7BP6CxAXmIp9PPjUlC', 
//       email: 'mark@gmail.com',
//       avatar: 'anon.png',
//       role: 'moderator',
//       balance: 0,
//       accessToken: null,
//       rating: 0
//     }], {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Users', { email: 'moderator@example.com' }, {});
//   }
// };

require('dotenv').config();
const bcrypt = require('bcrypt');
const CONSTANTS = require('../constants');
const { Users} = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = bcrypt.hashSync(process.env.MODERATOR_PASSWORD, CONSTANTS.SALT_ROUNDS); 
    
    await Users.upsert( 
      {
        firstName: 'mark',
        lastName: 'mark',
        displayName: 'mark',
        password: hashedPassword, 
        email: 'mark@gmail.com',
        avatar: 'anon.png',
        role: 'moderator',
        balance: 0,
        rating: 0,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { email: 'mark@gmail.com' });
  },
};