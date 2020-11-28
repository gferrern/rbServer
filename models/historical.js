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
    }
  };
  historical.init({
    client_id: Sequelize.INTEGER,
    shopkeeper_id: Sequelize.INTEGER,
    bag_unit_id: Sequelize.INTEGER,
    typeservice_id: Sequelize.INTEGER,
    requested_at: Sequelize.DATE,
    expiration: Sequelize.DATE,
    started_at: Sequelize.DATE,
    status: Sequelize.ENUM('delivered','undelivered'),
    returned_at: Sequelize.DATE,
    pay_id: Sequelize.INTEGER,
    paid: Sequelize.TINYINT,
    updatedAt: Sequelize.DATE,
  }, {
    sequelize,
    modelName: 'historical',
  });
  return historical;
};