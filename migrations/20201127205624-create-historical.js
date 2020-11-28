'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('historicals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shopkeeper_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bag_unit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      typeservice_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      requested_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      expiration: {
        type: Sequelize.DATE,
        allowNull: true
      },
      started_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      status: {
        type: Sequelize.ENUM('delivered','undelivered'),
        allowNull: true
      },
      returned_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      pay_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      paid: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('historicals');
  }
};