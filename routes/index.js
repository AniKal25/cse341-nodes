const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hello, Christiana Kalu!!!');
   
});

module.exports = routes;