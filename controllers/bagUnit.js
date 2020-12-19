
var express = require('express');

const models = require('../models');

const create = async function (req, res) {
  try {
    return res.status(201).json(
      await models.bagUnit.create({
        typeBagId: req.body.typeBagId,
        createdAt: req.body.createdAt,
        lifetimeFinished: req.body.lifetimeFinished, 
    }));
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const remove = async function (req, res) {
  try {
    return res.status(201).json(
      await models.bagUnit.remove({
        id: req.body.id 
    }));
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const lifetimePassed = async function (req, res) {
  try {
    const { bagUnitId } = req.params;
    const [ updated ] = await models.bagUnit.update(req.body, {
      where: { id: bagUnitId }
    });
    if (updated) {
      const lifetimePassed = await models.bagUnit.findOne({ where: { id: bagUnitId } });
      return res.status(200).json({ lifetime_finished: 1 });
    }
    throw new Error('BagUnit not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const bagRemanufactured = async function (req, res) {
  try {
    const { bagUnitId } = req.params;
    const [ updated ] = await models.bagUnit.update(req.body, {
      where: { id: bagUnitId }
    });
    if (updated) {
      const lifetimeNew = await models.bagUnit.findOne({ where: { id: bagUnitId } });
      return res.status(200).json({ lifetime_finished: 0 });
    }
    throw new Error('BagUnit not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}




module.exports = {
  create,remove,lifetimePassed,bagRemanufactured
}