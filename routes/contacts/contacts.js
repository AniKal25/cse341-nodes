const routes = require('express').Router();
const {getAllContacts, getContactById} = require('../../controllers/contacts/contacts')

routes.get('/', getAllContacts);
routes.get('/id/:id', getContactById)

module.exports = routes;