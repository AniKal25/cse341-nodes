//const routes = require('express').Router();
const express = require('express');
//const contacts = require('../model/contacts/contacts');
const routes = require('express').Router();
const contacts = require('./contacts/contacts');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



routes.use('/contacts', contacts);

// routes.use('/api-docs', swaggerUi.serve);
// routes.get('/api-docs', swaggerUi.setup(swaggerDocument, {explorer: true}));
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get('/', (req, res) => {
    res.send('Health check');
    //console.log('Health check')
   
});

routes.post('/', (req, res) => {
    console.log(req.body)
    res.status(201).send('This is a post')
    });

//routes.patch


module.exports = routes;