var DataTypes = require("sequelize").DataTypes;
var _BAG_UNIT = require("./BAG_UNIT");
var _CLIENT = require("./CLIENT");
var _HISTORICAL = require("./HISTORICAL");
var _PAY = require("./PAY");
var _SHOPKEEPER = require("./SHOPKEEPER");
var _TYPESERVICE = require("./TYPESERVICE");
var _TYPE_BAG = require("./TYPE_BAG");
var _USER = require("./USER");

function initModels(sequelize) {
  var BAG_UNIT = _BAG_UNIT(sequelize, DataTypes);
  var CLIENT = _CLIENT(sequelize, DataTypes);
  var HISTORICAL = _HISTORICAL(sequelize, DataTypes);
  var PAY = _PAY(sequelize, DataTypes);
  var SHOPKEEPER = _SHOPKEEPER(sequelize, DataTypes);
  var TYPESERVICE = _TYPESERVICE(sequelize, DataTypes);
  var TYPE_BAG = _TYPE_BAG(sequelize, DataTypes);
  var USER = _USER(sequelize, DataTypes);

  BAG_UNIT.belongsTo(TYPE_BAG, { foreignKey: "type_bag_id"});
  TYPE_BAG.hasMany(BAG_UNIT, { foreignKey: "type_bag_id"});
  CLIENT.belongsTo(USER, { foreignKey: "user_id"});
  USER.hasMany(CLIENT, { foreignKey: "user_id"});
  HISTORICAL.belongsTo(CLIENT, { foreignKey: "client_id"});
  CLIENT.hasMany(HISTORICAL, { foreignKey: "client_id"});
  HISTORICAL.belongsTo(SHOPKEEPER, { foreignKey: "shopkeeper_id"});
  SHOPKEEPER.hasMany(HISTORICAL, { foreignKey: "shopkeeper_id"});
  HISTORICAL.belongsTo(BAG_UNIT, { foreignKey: "bag_unit_id"});
  BAG_UNIT.hasMany(HISTORICAL, { foreignKey: "bag_unit_id"});
  HISTORICAL.belongsTo(TYPESERVICE, { foreignKey: "typeservice_id"});
  TYPESERVICE.hasMany(HISTORICAL, { foreignKey: "typeservice_id"});
  HISTORICAL.belongsTo(PAY, { foreignKey: "pay_id"});
  PAY.hasMany(HISTORICAL, { foreignKey: "pay_id"});
  SHOPKEEPER.belongsTo(USER, { foreignKey: "user_id"});
  USER.hasMany(SHOPKEEPER, { foreignKey: "user_id"});

  return {
    BAG_UNIT,
    CLIENT,
    HISTORICAL,
    PAY,
    SHOPKEEPER,
    TYPESERVICE,
    TYPE_BAG,
    USER,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
