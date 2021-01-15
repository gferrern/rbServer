'use strict';
const {  Model } = require('sequelize');
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
      historical.belongsTo(models.client);
    }

    static findIfAvaiable(idParam) {
      return this.findAll({
        attributes: [
          sequelize.fn('MAX', sequelize.col('id')),
          sequelize.col('status')
        ],
        where: { bagUnitId: idParam },
        group: ['id']
      });
    }

    static checkIfExpiresBagLoans(models) {
      const { Op } = require("sequelize");
      var logger=require('winston');
      var cron = require('node-cron');
      async function attemporalContracts(models) {
        //all typeservices with forType 0 are atemporal services
        return await models.typeService.findAll({ where: { forTime: { [Op.gt]: 0 }, }, attributes: ['id'] }).then((rows) => {
          return rows.map((r) => {
            return r.id;
          })
        });
      }
      const attemporalcontracts = attemporalContracts(models).then(attemporalcontractsIds => {
        cron.schedule('* 55 23 * * *', () => {
          let d = new Date()
          var today = new Date( d.getFullYear(),d.getMonth(),d.getDay(),24, 55, 0);         
          console.log(today);
          
          this.findAndCountAll({
            where: {
              [Op.and]: [
                { status: 'undelivered' },
                { paid: 0 }, {
                  expiration: { [Op.lt]: today }
                },
                { typeserviceId: { [Op.notIn]: attemporalcontractsIds } }
              ],
            },
          }).then(rows => {
            logger.info('Today %d bags loans have expired',rows.count);
          });
          
        });
      });
    }
  }

  historical.init({
    clientId: DataTypes.INTEGER,
    shopkeeperId: DataTypes.INTEGER,
    bagUnitId: DataTypes.INTEGER,
    typeserviceId: DataTypes.INTEGER,
    requestedAt: DataTypes.DATE,
    expiration: DataTypes.DATE,
    startedAt: DataTypes.DATE,
    status: DataTypes.STRING,//sequelize.ENUM('delivered', 'undelivered'),
    returnedAt: DataTypes.DATE,
    price: DataTypes.INTEGER,
    paid: DataTypes.TINYINT,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'historical',
  });
  return historical;
};