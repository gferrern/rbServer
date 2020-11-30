'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopkeeper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shopkeeper.belongsTo(models.user);
      shopkeeper.hasMany(models.historical, { foreignKey: "shopkeeper_id"});
    
    }
  };
  shopkeeper.init({
    user_id: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    address: DataTypes.STRING,
    zipcode: DataTypes.STRING(5),
    city: DataTypes.STRING(10),
    state: DataTypes.STRING,
    administrativeArea: DataTypes.STRING,
    administrativeArea2: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
    created_at: DataTypes.DATE,
    banned: DataTypes.TINYINT,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'shopkeeper',
  });
  return shopkeeper;
};