const express = require('express');
const router = express.Router();
const User = require('../Database/Models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//Registration
router.post('/Register', (req, res, next) => {
    User.getUserByUserName(req.body.UserName, (err, user) => {
        if(err){
            res.json({success: false, msg: "Failed to register user"});
        } else {
            if(user != null) {
                res.json({success: true, msg: "UserName already in use"});
            } else {

                let newUser = new User({
                    UserName: req.body.UserName,
                    Email: req.body.Email,
                    Password: req.body.Password,
                    Salt: ""
                });
            
                User.addUser(newUser, (err, user) => {
                    if(err) {
                        res.json({success: false, msg: "Failed to register user"})
                    } else {
                        res.json({success: true, msg: "User registered"})
                    }
                });
            }
        }
    });
});

//Login
router.post('/Login', (req, res, next) => {
    User.getUserByUserName(req.body.UserName, (err, user) => {
        if(err){
            res.json({success: false, msg: "Failed to Login"});
        } else {
            if(user != null) {
                bcrypt.hash(req.body.Password, user.Salt, (err, hash) => {
                    if(err) throw err;
                    if(hash == user.Password){
                        res.json({success: true, msg: "Logged In Successfully"});
                    } else {
                        res.json({success: true, msg: "UserName or Password are incorrect"})
                    }
                });
            } else {
                res.json({success: true, msg: "UserName or Password are incorrect"});
            }
        }
    })
});

module.exports = router;