'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'typeServices',
      [
        {
          name: "Prestamo",
          for_time: new Date(86400000) //timestamp 30 days
        },
        {
          name: "Deposito",
          for_time: new Date(0), //timestamp of 0
        }
      ]
    
      );
  },
  down: async (queryInterface, Sequelize) => {
  }
};