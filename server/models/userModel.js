const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const schemaUser = new Schema({
    first_name : {
        type : String,
        required: [true,'First Tidak Boleh Kosong']
    },
    last_name : String,
    email : {
        type: String,
        required: [true,'Email Tidak Boleh Kosong'],
        unique : [true, 'Email Sudah Ada']
    },
    password : {
        type : String,
        required : [true, 'Password Tidak Boleh Kosong']
    }
});

schemaUser.pre('save', function (next) {
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

const User = mongoose.model('User', schemaUser);

module.exports = User;