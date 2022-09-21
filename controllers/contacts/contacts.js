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

const newContact = async(req, res) => {
    try {
        // Get all contacts from the database
        //const contact = req.body;
        const contact = new Contacts(req.body);
        //console.log(contact);
        const result = await contact.save()
        //console.log(result)
        //Return the response
        res.status(201).send(result._id)
    } catch (error) {
        console.log(error)
        
    }   
} 

const updateContact = async(req, res) => {
    try {
        const id = req.params.id;
        // Get all contacts from the database
        const contact = req.body;
        console.log(contact);
        const result = await Contacts.findByIdAndUpdate(id, contact)
        //Return the response
        res.status(204).send('Your contact has been updated')
    } catch (error) {
        console.log(error)
        
    }   
}

const deleteContact = async(req, res) => {
    try {
        const id = req.params.id;
        // Get all contacts from the database
        const contact = req.body;
        console.log(contact);
        const result = await Contacts.findByIdAndDelete(id, contact)
        //Return the response
        res.status(200).send('Your contact has been deleted')
    } catch (error) {
        console.log(error)
        
    }   
}
 module.exports = {getAllContacts, getContactById, newContact, updateContact, deleteContact}