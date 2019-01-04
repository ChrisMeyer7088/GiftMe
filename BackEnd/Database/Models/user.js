const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dbcfg = require('../dbconfig');

//User Schema

const UserSchema = mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Salt: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUserName = function(username, callback){
    let query = {UserName: username};
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.Password, salt, (err, hash) => {
            if(err) throw err;
            newUser.Salt = salt;
            newUser.Password = hash;
            newUser.save(callback);
        });
    })
}