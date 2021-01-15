const express = require('express');
const path = require('path')
const morgan = require('morgan');
const winston = require('winston');
var uuid = require('uuid');
var fs = require('fs');
require('dotenv').config();
const bodyParser = require('body-parser');// This will be our application entry. We'll setup our server here.
const http = require('http');// Set up the express app
const app = express();// Log requests to the console.
app.use(morgan('dev'));
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


morgan.token('id', function getId(req) {
    return req.id
})

app.use(assignId)
var logger=require('./logger.js'); 

app.use(require("morgan")("combined", { "stream": logger.stream }));

app.get('/', function (req, res) {
    res.send('hello, world!')
})

function assignId(req, res, next) {
    req.id = uuid.v4()
    next()
}

app.use('/api', router);
console.log("crash");
const client = require('./controllers/client');
console.log("crash2");
app.post('/api/client/create', client.create);

const bagUnit = require('./controllers/bagUnit');
app.post('/api/bag/create', bagUnit.create);

const shopkeeper = require('./controllers/shopkeeper');
app.post('/api/shop/create', shopkeeper.create);

const historical = require('./controllers/historical');
app.post('/api/historical/takeBag', historical.takeBag);
app.post('/api/historical/returnBag', historical.returnBag);

//const user = require('./controllers/user');
//app.post('/api/user', user.create);

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server1 is live at localhost:${PORT}`));
