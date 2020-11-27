
/* Controllers */

const userController = require('../controllers/user');module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));   app.post('/api/user/create', userController.create);
   app.get('/api/users', userController.list);};

const clientController = require('../controllers/client');module.exports = (app) => {
     app.get('/api', (req, res) => res.status(200).send ({
          message: 'Example project did not give you access to the api web services',
     }));   app.post('/api/client/create', clientController.create);
     app.get('/api/client', clientController.list);};
  
  