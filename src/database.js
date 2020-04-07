const mongoose = require('mongoose');

const {data} = require('.keys/'); 

mongoose.connect(database.URI, {
    useNewUrlParser: true
})
.then(db => console.log('db is connected'))
.catch(err => console.log(err));