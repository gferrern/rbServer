'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class typeService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association herecl
      typeService.hasMany(models.historical, { foreignKey: "typeservice_id"});

    }
  };
  typeService.init({
    name: DataTypes.STRING,
    for_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'typeService',
  });
  return typeService;
};