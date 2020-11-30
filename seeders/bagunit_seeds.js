'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'bagUnits',
      [
        {
          type_bag_id: 1,
          created_at: new Date(),
          lifetime_finished: 0, 
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          lifetime_finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          lifetime_finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          lifetime_finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          lifetime_finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          lifetime_finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          lifetime_finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          lifetime_finished: 0,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          lifetime_finished: 0,
        },
        {
          type_bag_id: 1,
          created_at: new Date(),
          lifetime_finished: 1,
        },
        {
          type_bag_id: 2,
          created_at: new Date(),
          lifetime_finished: 1,
        }
      ]
    );
  },
  down: async (queryInterface, Sequelize) => {
  }
};