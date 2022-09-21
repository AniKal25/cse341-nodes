//const routes = require('express').Router();
const express = require('express');
//const contacts = require('../model/contacts/contacts');
const routes = require('express').Router();
const contacts = require('./contacts/contacts');


routes.use('/contacts', contacts);

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