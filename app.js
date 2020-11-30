const express = require('express');
const logger = require('morgan');
require('dotenv').config();
const bodyParser = require('body-parser');// This will be our application entry. We'll setup our server here.
const http = require('http');// Set up the express app
const app = express();// Log requests to the console.
app.use(logger('dev'));


const { Router } = require('express');
const router = Router();

const client = require('./controllers/client');
const user = require('./controllers/user');
app.use('/api', router);
app.post('/api/create', client.create);
app.post('/api/user', user.create);
const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server1 is live at localhost:${PORT}`));
