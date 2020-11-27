/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CLIENT', {
    client_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    banned: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CLIENT',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "client_id" },
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
        name: "CLIENT_index_0",
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
};
