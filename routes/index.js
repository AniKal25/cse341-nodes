//const routes = require('express').Router();
const express = require('express');
const routes = require('express').Router();

routes.use('/contacts', require('./contacts'))

// routes.get('/', (req, res) => {
//     res.send('Hello, Christiana Kalu!!!');
   
// });

module.exports = routes;