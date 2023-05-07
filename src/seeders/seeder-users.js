'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                firstName: 'Diep',
                lastName: 'Ton',
                email: 'admin@email.com',
                password: '123456',
                address: '71B',
                gender: 1,
                roleId: 'R1',
                phoneNumber: '123456',
                positionId: 'doctor',
                image: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
