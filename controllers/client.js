const Sequelize = require('sequelize');
const { request } = require('../app');
const Client = require('../models').client;
const User = require('../models').user;

module.exports = {
    create(req, res) {
        return Client.create({
            user_id: User.create({ password: req.body.password }),
            full_name: req.body.full_name,
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
            .then(client => res.status(200).send(client))
            .catch(error => res.status(400).send(error))
    },
};
