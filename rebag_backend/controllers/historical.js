
var express = require('express');
const { loggers } = require('winston');

const models = require('../models');

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

const takeBag = async function (req, res) {
  try {
    var now = new Date();
    const tpService = await models.typeService.findOne({where:{id:req.body.typeserviceId}})
    const bagUnit = await models.bagUnit.findOne({where:{id:req.body.bagUnitId}})

    const historic = await models.historical.findIfAvaiable(req.body.bagUnitId)
    if(historic.status != "delivered"){
      throw new Error('Bag undelivered, not found');
    }else{
      const tpBag = await models.typeBag.findOne({where:{id:bagUnit.typeBagId}})
      const updated  = await models.historical.create({
        clientId: req.body.clientId,
        shopkeeperId: req.body.shopkeeperId,
        bagUnitId: req.body.bagUnitId,
        typeserviceId: req.body.typeserviceId,
        requestedAt: new Date(),
        expiration: new Date().addDays(tpService.forTime),
        startedAt: new Date(),
        status: 'undelivered',
        returnedAt: null,
        price: tpService.price,
        paid:req.body.paid,
        updatedAt: now,
        createdAt: now
      });
      tpService.update({moneyinreserve:tpService.moneyinreserve + tpBag.price})
      if (updated) {
        return res.status(200).json({updated});
      }
    }    
    throw new Error('Bag not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const returnBag = async function (req, res) {
  try {
    var now = new Date();
    const tpService = await models.typeService.findOne({where:{id:req.body.typeserviceId}});
    const bagUnit = await models.bagUnit.findOne({where:{id:req.body.bagUnitId}});
    const tpBag = await models.typeBag.findOne({where:{id:bagUnit.typeBagId}});
    const shop = await models.shopkeeper.findOne({where:{id:req.body.shopkeeperId}});
    const historic = await models.historical.findOne({where:{id:req.body.id }});
    
    const updated = (historic.expiration < historic.requested_at) ? await models.historical.update({
      status: 'undelivered',
      paid:1,
      updatedAt: now,
    }, {
      where: { id: req.body.id }
    }) : await models.historical.update({
        status: 'delivered',
        returned_at: now,
        paid:1,
        shopkeeperId: req.body.shopkeeperId,
        updatedAt: now,
      }, {
        where: { id: req.body.id }
      });
    tpService.update({moneyinreserve:tpService.moneyinreserve - tpBag.price})
    
    if (updated) {
      const returnBag = await models.historical.findOne({ where: { id: req.body.id }});
      return res.status(200).json({returnBag});
    }
    throw new Error('Bag not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const checkIfExpiresBagLoans = models.historical.checkIfExpiresBagLoans(models);

module.exports = {
  takeBag,returnBag,checkIfExpiresBagLoans
}