'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('typeBags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(10,0),
        allowNull: false
      },
      measure_height_cm: {
        type: Sequelize.DECIMAL(10,0),
        allowNull: false
      },
      measure_width_cm: {
        type: Sequelize.DECIMAL(10,0),
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('typeBags');
  }
};