'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shopkeepers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      full_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      zipcode: {
        type: Sequelize.STRING(5),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      administrativeArea: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      administrativeArea2: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      lat: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      lon: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      banned: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shopkeepers');
  }
};