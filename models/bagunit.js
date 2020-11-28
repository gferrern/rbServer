'use strict';
const {
  Model
} = require('sequelize');
const typeService = require('../trash_models/typeService');
module.exports = (sequelize, DataTypes) => {
  class bagUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  bagUnit.init({
    type_bag_id: DataTypes.INTEGER,
    created_at:DataTypes.DATE,
    finished:DataTypes.TINYINT,
  }, {
    sequelize,
    modelName: 'bagUnit',
  });
  return bagUnit;
};