/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BAG_UNIT', {
    bag_unit_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_bag_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TYPE_BAG',
        key: 'type_bag_id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    finished: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'BAG_UNIT',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bag_unit_id" },
        ]
      },
      {
        name: "type_bag_id",
        using: "BTREE",
        fields: [
          { name: "type_bag_id" },
        ]
      },
      {
        name: "BAG_UNIT_index_2",
        using: "BTREE",
        fields: [
          { name: "bag_unit_id" },
        ]
      },
    ]
  });
};
