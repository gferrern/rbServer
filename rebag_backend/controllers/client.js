
var express = require('express');

const models = require('../models');

const create = async function (req, res) {
  try {
    return res.status(201).json(
      await models.client.create({
          firebaseuuid: req.body.firebaseuuid,
          fullName: req.body.fullName,
          address: req.body.address,
          zipcode: req.body.zipcode,
          city: req.body.city,
          state: req.body.state,
          administrativeArea: req.body.administrativeArea,
          administrativeArea2: req.body.administrativeArea2,
          email: req.body.email,
          banned: req.body.banned,
          phone: req.body.phone
        })
    );
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteClient = async function (req, res) {
  try {
    const post = await models.client.delete(req.body.id);
    return res.status(201).json(post)

  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const bann = async function (req, res) {
  try {
    const [updated] = await models.client.update({
      banned: 1,
    }, {
      where: { id: req.body.clientId }
    });
    if (updated) {
      const bann = await models.client.findOne({ where: { id: req.body.clientId } });
      return res.status(200).json({ bann });
    }
    throw new Error('Client not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
module.exports = {
  create, bann, deleteClient
}