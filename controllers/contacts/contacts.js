const Contacts = require('../../model/contacts/contacts')

const getAllContacts = async(req, res) =>  {
    
    try {
        // Get all contacts from the database
        const result = await Contacts.find()
        //Return the response
        res.json(result)
    } catch (error) {
        console.log(error)
        
    }    
 }

const getContactById = async(req, res) => {
    try {
        // Get all contacts from the database
        const result = await Contacts.findById(req.params.id)
        //Return the response
        res.json(result)
    } catch (error) {
        console.log(error)
        
    }    

}
 module.exports = {getAllContacts, getContactById}