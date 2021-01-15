'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class bagUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bagUnit.hasMany(models.historical, { foreignKey: "bagUnitId"});
    }
  };
  bagUnit.init({
    typeBagId: DataTypes.INTEGER,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE,
    lifetimeFinished:DataTypes.TINYINT,
  }, {
    sequelize,
    modelName: 'bagUnit',
  });
  return bagUnit;
};