//call mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create new schema
const userSchema = new Schema({
    username:      {type: String, unique: true},
    password:      {type: String},
    firstname:      {type: String},
    lastname:       {type: String},

});

//asign model
const User = mongoose.model('users', userSchema);

module.exports = User;