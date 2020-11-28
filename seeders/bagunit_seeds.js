'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'bagUnits',
      [
        {
          type_bag_id: 1,
          created_at: new Date(),
          finished: 0, //vida util
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          finished: 0,
        }
      ]
    );
  },
  down: async (queryInterface, Sequelize) => {
  }
};