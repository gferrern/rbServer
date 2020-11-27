/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HISTORICAL', {
    historical_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CLIENT',
        key: 'client_id'
      }
    },
    shopkeeper_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SHOPKEEPER',
        key: 'shopkeeper_id'
      }
    },
    bag_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'BAG_UNIT',
        key: 'bag_unit_id'
      }
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    typeservice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TYPESERVICE',
        key: 'typeservice_id'
      }
    },
    requested_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    expiration: {
      type: DataTypes.DATE,
      allowNull: true
    },
    started_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.ENUM('delivered','undelivered'),
      allowNull: true
    },
    returned_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pay_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PAY',
        key: 'pay_id'
      }
    },
    paid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'HISTORICAL',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "historical_id" },
        ]
      },
      {
        name: "pay_id",
        using: "BTREE",
        fields: [
          { name: "pay_id" },
        ]
      },
      {
        name: "HISTORICAL_index_4",
        using: "BTREE",
        fields: [
          { name: "typeservice_id" },
        ]
      },
      {
        name: "HISTORICAL_index_5",
        using: "BTREE",
        fields: [
          { name: "bag_unit_id" },
        ]
      },
      {
        name: "HISTORICAL_index_6",
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "HISTORICAL_index_7",
        using: "BTREE",
        fields: [
          { name: "shopkeeper_id" },
        ]
      },
    ]
  });
};
