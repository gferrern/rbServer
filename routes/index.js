
/* Controllers */
const clientController = require('../controllers/client');module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/api/client/create', clientController.create);
};

  