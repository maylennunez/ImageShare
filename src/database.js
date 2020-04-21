const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient
const {database} = require('./keys'); 

mongoose.connect(database.URI,
     { useNewUrlParser: true, useUnifiedTopology: true  
})
.then(db => console.log('db is connected'))
.catch(error => console.log(error));