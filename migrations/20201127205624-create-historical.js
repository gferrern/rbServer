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
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shopkeeperId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bagUnitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      typeserviceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      requestedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      expiration: {
        type: Sequelize.DATE,
        allowNull: true
      },
      startedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      status: {
        type: Sequelize.ENUM('delivered','undelivered'),
        allowNull: true
      },
      returnedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      price: {
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
      },
      createdAt: {
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