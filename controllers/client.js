const Sequelize = require('sequelize');
const { request } = require('../app');
const client = require('../models').client;module.exports = { create(req, res) {
    return client
        .create ({
            full_name: request.body.client.full_name,
            address: request.body.client.address,
            zipcode: request.body.client.zipcode,
            city: request.body.client.city,
            state: request.body.client.state,
            administrativeArea: request.body.client.administrativeArea,
            administrativeArea2: request.body.client.administrativeArea2,
            email: request.body.client.email,
            banned: request.body.client.banned,
            phone: request.body.client.phone,
            user: new user(request.body.user.password),
        })
        .then(client => res.status(200).send(client))
        .catch(error => res.status(400).send(error))
 }, ban(_, res) {
    return client.bann({
        where: {
            client_id: req.params.client_id,
         }
    })
       .then(client => res.status(200).send(client))
       .catch(error => res.status(400).send(error))
}, list(_, res) {
     return client.findAll({})
        .then(client => res.status(200).send(client))
        .catch(error => res.status(400).send(error))
 }, find (req, res) {
     return client.findAll({
         where: {
            client_id: req.params.client_id,
         }
     })
     .then(client => res.status(200).send(client))
     .catch(error => res.status(400).send(error))
  },
};
