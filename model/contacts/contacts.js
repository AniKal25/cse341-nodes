const mongoose = require('mongoose');

const contactSchema = mongoose.Schema( {
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String
    },
    favoriteColor:{
        type: String
    },
    birthday:{
        type: Date
    },

}, {
    collection: "contacts",
})

module.exports = mongoose.model("Contacts", contactSchema)