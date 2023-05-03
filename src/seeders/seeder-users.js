'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Diep',
      lastName: 'Ton',
      email: 'admin@email.com',
      password: '123456',
      address: '71B',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
