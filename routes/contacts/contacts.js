const routes = require('express').Router();
const {getAllContacts, getContactById, newContact, updateContact, deleteContact} = require('../../controllers/contacts/contacts')

routes.get('/', getAllContacts);
routes.get('/:id', getContactById)

routes.post('/', newContact);
routes.put('/:id', updateContact);
routes.delete('/:id', deleteContact);

module.exports = routes;