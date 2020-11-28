'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('typeServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      for_time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: "1970-01-01 00:00:01"
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('typeServices');
  }
};