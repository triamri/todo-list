const User = require('../models/userModel');
const ObjectID = require('mongodb').ObjectID; 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



let getUser = (req, res) => {

    User.findOne({
        email : req.body.email
    })
    .then((result) => {
        if (!result){
            res.status(403).json({
                msg : 'User Not Found'
            });
        }

        const compare = bcrypt.compareSync(req.body.password, result.password);

        if (!compare){
            res.status(403).json({
                msg: 'Password Wrong'
            });
        }

        jwt.sign({
            id : result._id,
            first_name : result.first_name,
            email : result.email
        },process.env.RAHASIA,(err, token)=>{

            res.status(200).json({
                msg: 'success',
                key_token: token
            });

        });

    })
    .catch((err) =>{    
        res.status(500).json(err);
    });
}

let createUser = (req, res) => {
    const newUser = new User({
        first_name: req.body.first,
        last_name: req.body.last,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save().then((result) => {
        res.status(200).json(newUser);
    }).catch(err => {
        res.status(500).json(err);
    });

}

module.exports = {
    getUser,
    createUser
}