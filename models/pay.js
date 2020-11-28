'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pay.init({
    price:DataTypes.DECIMAL,
    paid: DataTypes.TINYINT,
  }, {
    sequelize,
    modelName: 'pay',
  });
  return pay;
};