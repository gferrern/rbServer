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
      typeBag.hasMany(models.bagUnit, { foreignKey: "typeBagId"});
    }
  };
  typeBag.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    measureHeightCm: DataTypes.DECIMAL,
    measureWidthCm: DataTypes.DECIMAL,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'typeBag',
  });
  return typeBag;
};