/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TYPESERVICE', {
    typeservice_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    for_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "1970-01-01 00:00:01"
    }
  }, {
    sequelize,
    tableName: 'TYPESERVICE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "typeservice_id" },
        ]
      },
    ]
  });
};
