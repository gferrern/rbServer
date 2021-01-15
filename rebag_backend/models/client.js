'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      client.hasMany(models.historical, { foreignKey: "clientId" });

    }
  };
  client.init({
    firebaseuuid: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    zipcode: DataTypes.STRING(5),
    city: DataTypes.STRING(10),
    state: DataTypes.STRING,
    administrativeArea: DataTypes.STRING,
    administrativeArea2: DataTypes.STRING,
    email: DataTypes.STRING,
    banned: DataTypes.TINYINT,
    phone: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'client',
  });
  return client;
};