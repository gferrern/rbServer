'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      full_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
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
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      banned: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      phone: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clients');
  }
};