const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser =require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
//require('dotenv/config');

// app.get('/', (req, res) => {
//     res.send('Hello World!')
   
// })

//New comment to test git graph
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
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })

connect();
// app.listen(port, () => {
//     console.log(`Example app listening on ${port}`)
   
// })
app.use('/', require('./routes'))
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})