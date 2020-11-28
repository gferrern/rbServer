const Sequelize     = require('sequelize');
const user       = require('../models').user;module.exports = { create(req, res) {
    return user
        .create ({
             password: req.params.password
        })
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error))
 }
};