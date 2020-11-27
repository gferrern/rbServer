/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PAY', {
    pay_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 3
    },
    paid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'PAY',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pay_id" },
        ]
      },
    ]
  });
};
