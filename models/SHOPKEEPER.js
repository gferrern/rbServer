/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SHOPKEEPER', {
    shopkeeper_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'USER',
        key: 'user_id'
      }
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    zipcode: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    administrativeArea: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    administrativeArea2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    lon: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    banned: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SHOPKEEPER',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shopkeeper_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "SHOPKEEPER_index_1",
        using: "BTREE",
        fields: [
          { name: "shopkeeper_id" },
        ]
      },
    ]
  });
};
