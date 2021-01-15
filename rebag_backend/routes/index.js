/* Controllers */
const { Router } = require('express');
const client = require('../controllers/client');
const shopkeeper = require('../controllers/shopkeeper');
const historical = require('../controllers/historical');
const bagUnit = require('../controllers/bagUnit');

const router = Router();

module.exports = router;
