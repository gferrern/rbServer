'use strict';

const user = require("../models/user");

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'historicals',
      [
        {
          client_id: 1,
          shopkeeper_id: 1,
          bag_unit_id: 1,
          typeservice_id: 1,
          requested_at: new Date(),
          expiration: new Date().addDays(30),
          started_at: new Date(),
          status: 'undelivered',
          returned_at: null,
          pay_id: null,
          paid: 0,
          updatedAt: new Date(),
        },
      ]
    );
  },
  down: async (queryInterface, Sequelize) => {
  }
};