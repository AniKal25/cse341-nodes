const mongoose = require('mongoose');

const contactSchema = mongoose.Schema( {
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    favoriteColor:{
        type: String
    },
    birthday:{
        type: String
    },

}, {
    collection: "contacts",
})

module.exports = mongoose.model("Contacts", contactSchema)