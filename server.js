const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser =require('body-parser');
const PORT = process.env.PORT || 8080;
//require('dotenv/config');

// app.get('/', (req, res) => {
//     res.send('Hello World!')
   
// })
const uri = 'mongodb+srv://AniKal25:Bidemikalu25@cluster0.nhrejo8.mongodb.net/?retryWrites=true&w=majority'
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error);
    }
    
}
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//app.use(cors.json)

connect();
// app.listen(port, () => {
//     console.log(`Example app listening on ${port}`)
   
// })
app.use('/', require('./routes'))
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})