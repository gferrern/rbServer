'use strict';

const user = require("../models/user");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'shopkeepers',
      [
        {
          user_id: await queryInterface.bulkInsert(
            'users',
            [
              {
                password: "peppa123",
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ]),
          lat: 42.12,
          lon: -10.20,
          created_at: new Date(),
          banned: 0,
          full_name: "peppa pig",
          created_at: new Date(),
          address: "tienda1",
          zipcode: "25220",
          city: "Barcelona",
          state: "España",
          administrativeArea:  "Barcelona",
          administrativeArea2: "Cataluña",
          email: "peppapig@green.com",
          banned: 0,
          phone:"696969"
        },
        {
          user_id: await queryInterface.bulkInsert(
            'users',
            [
              {
                password: "peppa987",
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ]),
          lat: 42.12,
          lon: -10.20,
          created_at: new Date(),
          banned: 0,
          full_name: "pocoyo",
          created_at: new Date(),
          address: "tienda2",
          zipcode: "25220",
          city: "Madrid",
          state: "España",
          administrativeArea:  "Madrid",
          administrativeArea2: "Madrid",
          email: "pocoyo@greenwood.com",
          banned: 0,
          phone:"696969"
        }
      ]
    );
  },
  down: async (queryInterface, Sequelize) => {
  }
};