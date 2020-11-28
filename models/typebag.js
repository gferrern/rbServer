'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class typeBag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  typeBag.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    measure_height_cm: DataTypes.DECIMAL,
    measure_width_cm: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'typeBag',
  });
  return typeBag;
};