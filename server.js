const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!')
   
// })
const uri = 'mongodb+srv://AniKal25:Bidemikalu25@cluster0.nhrejo8.mongodb.net/?retryWrites=true&w=majority'
app.use('/', require('./routes'))
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error);
    }
    
}

connect();
// app.listen(port, () => {
//     console.log(`Example app listening on ${port}`)
   
// })
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})