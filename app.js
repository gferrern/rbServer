const express = require('express');
const logger = require('morgan');
require('dotenv').config();
const bodyParser = require('body-parser');// This will be our application entry. We'll setup our server here.
const http = require('http');// Set up the express app
const app = express();// Log requests to the console.
app.use(logger('dev'));
app.use(bodyParser.json());
console.log("---------------------------------");
console.log(" ____  _____ ____  ____  _____");
console.log("/  __\\/  __//  __\\/  _ \\/  __/");
console.log("|  \\/||  \\  | | //| / \\|| |  _");
console.log("|    /|  /_ | |_\\|  |-||| |_//");
console.log("\\_/\\\_\\\\____\\\\____/\\_/ \\|\\____\\");
console.log("---------------------------------");
const { Router } = require('express');
const router = Router();




app.use('/api', router);

const client = require('./controllers/client');
app.post('/api/client/create', client.create);

const bagUnit = require('./controllers/bagUnit');
app.post('/api/bag/create', bagUnit.create);

const shopkeeper = require('./controllers/shopkeeper');
app.post('/api/shop/create', shopkeeper.create);

const historical = require('./controllers/historical');
app.post('/api/historical/takeBag', historical.takeBag);
app.post('/api/historical/returnBag', historical.returnBag);

const user = require('./controllers/user');
app.post('/api/user', user.create);

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server1 is live at localhost:${PORT}`));
