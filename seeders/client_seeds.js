'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;
const saltText = "Hello Client";

const user = require("../models/user");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'clients',
      [
        {
          user_id: await queryInterface.bulkInsert(
            'users',
            [
              {
                password: await bcrypt.genSalt(saltRounds)
                  .then(salt => {
                    return bcrypt.hash("user123", salt)
                      .then(hash => {
                        return hash;
                      });
                  }),
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ]),
          full_name: "Osama Bin Laden",
          created_at: new Date(),
          address: "Cueva123",
          zipcode: "25220",
          city: "Mosahi",
          state: "Afghanistan",
          administrativeArea: "kabul",
          administrativeArea2: "kabul",
          email: "osama@shitwintowers.com",
          banned: 0,
          phone: "696969"
        },
        {
          user_id: await queryInterface.bulkInsert(
            'users',
            [
              {
                password: await bcrypt.genSalt(saltRounds)
                  .then(salt => {
                    return bcrypt.hash("user987", salt)
                      .then(hash => {
                        return hash;
                      });
                  }),
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ]
          ),
          full_name: "Donald Trump",
          created_at: new Date(),
          address: "Queens",
          zipcode: "25220",
          city: "New York",
          state: "EEUU",
          administrativeArea: "Nueva York",
          administrativeArea2: "Nueva York",
          email: "trump@fraudEvidenceElections.com",
          banned: 0,
          phone: "66996699"
        }
      ]
    );
  },
  down: async (queryInterface, Sequelize) => {
  }
};