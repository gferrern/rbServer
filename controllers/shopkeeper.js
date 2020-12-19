
var express = require('express');

const models = require('../models');

const create = async function (req, res) {
  try {
    return res.status(201).json(await models.user.create({ password: req.body.userId.password },).then(function(user) {
      return models.shopkeeper.create({
        userId: user.id,
        fullName: req.body.fullName,
        address: req.body.address,
        zipcode: req.body.zipcode,
        city: req.body.city,
        state: req.body.state,
        administrativeArea: req.body.administrativeArea,
        administrativeArea2: req.body.administrativeArea2,
        email: req.body.email,
        banned: req.body.banned,
        phone: req.body.phone,
        lat: req.body.lat,
        lon: req.body.lon,
      });
    }));
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const bann = async function (req, res) {
  try {
    const [ updated ] = await models.shopkeeper.update({
      banned: 1,
    }, {
      where: { id: req.body.id }
    });
    if (updated) {
      const bann = await models.shopkeeper.findOne({ where: { id: req.body.id} });
      return res.status(200).json({bann});
    }
    throw new Error('Shopkeeper not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  create,bann
}