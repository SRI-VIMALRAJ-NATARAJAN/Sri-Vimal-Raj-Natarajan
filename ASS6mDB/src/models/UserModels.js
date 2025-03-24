const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    name: { 
        type: String,
    },
    price: { 
        type: Number,
    },
    description: { 
        type: String 
    },
   
});

module.exports = mongoose.model('users', users);

