'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'typeServices',
      [
        {
          name: "Prestamo",
          forTime: 30, //30 days
          moneyinreserve:0
        },
        {
          name: "Deposito",
          forTime: 0, // 0 days
          moneyinreserve:0
        }
      ]
    
      );
  },
  down: async (queryInterface, Sequelize) => {
  }
};