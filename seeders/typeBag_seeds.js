'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'typeBags',
      [
        {
          name: "Grande",
          price: 3.2,
          measure_height_cm: 50.3,
          measure_width_cm: 20.8
        },
        {
          name: "Media",
          price: 3,
          measure_height_cm: 20.9,
          measure_width_cm: 10.9
        }
      ]
    );
  },
  down: async (queryInterface, Sequelize) => {
  }
};