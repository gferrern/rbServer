'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historical extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      historical.belongsTo(models.shopkeeper);
      historical.belongsTo(models.bagUnit);
      historical.belongsTo(models.typeService);
      historical.belongsTo(models.pay);
      historical.belongsTo(models.client);

    }
  };
  historical.init({
    client_id: DataTypes.INTEGER,
    shopkeeper_id: DataTypes.INTEGER,
    bag_unit_id: DataTypes.INTEGER,
    typeservice_id: DataTypes.INTEGER,
    requested_at: DataTypes.DATE,
    expiration: DataTypes.DATE,
    started_at: DataTypes.DATE,
    status: DataTypes.STRING,//sequelize.ENUM('delivered', 'undelivered'),
    returned_at: DataTypes.DATE,
    pay_id: DataTypes.INTEGER,
    paid: DataTypes.TINYINT,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'historical',
  });
  return historical;
};