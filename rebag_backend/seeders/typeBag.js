'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'typeBags',
      [
        {
          name: "Grande",
          price: 3,
          measureHeightCm: 50.3,
          measureWidthCm: 20.8,
        },
        {
          name: "Media",
          price: 3,
          measureHeightCm: 20.9,
          measureWidthCm: 10.9,
        }
      ]
    );
  },
  down: async (queryInterface, Sequelize) => {
  }
};