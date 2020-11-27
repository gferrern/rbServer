/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TYPE_BAG', {
    type_bag_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    measure_height_cm: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    measure_width_cm: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TYPE_BAG',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_bag_id" },
        ]
      },
      {
        name: "TYPE_BAG_index_3",
        using: "BTREE",
        fields: [
          { name: "type_bag_id" },
        ]
      },
    ]
  });
};
