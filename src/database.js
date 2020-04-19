const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient
const {database} = require('./keys'); 

MongoClient.connect("database.URI",
     { useNewUrlParser: true, useUnifiedTopology: true  
})
.then(db => console.log('db is connected'))
.catch(err => console.log(err));