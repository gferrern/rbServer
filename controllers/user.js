
var express = require('express');
const models = require('../models');

const create = async function(req, res) {
  try {
    const post = await models.user.create(req.body);
    return res.status(201).json(post)

  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  create,
}
