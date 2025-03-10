'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 3,  
      firstName: 'mark',
      lastName: 'mark',
      displayName: 'mark',
      password: '$2b$05$rkkLdnqVnLLHMlNtUJCc9uLnaENzzyHAilj7BP6CxAXmIp9PPjUlC', 
      email: 'mark@gmail.com',
      avatar: 'anon.png',
      role: 'moderator',
      balance: 0,
      accessToken: null,
      rating: 0
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', { email: 'mark@gmail.com' }, {});
  }
};
