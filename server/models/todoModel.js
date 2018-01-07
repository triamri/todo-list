const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaTodo = new Schema({
    userID : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    title : {
        type : String,
        required: [true,'Title Tidak Boleh Kosong'],
    },
    desc : String,
    action : {
        type : String,
        enum: ['uncompleted', 'completed'],
        default: 'uncompleted'
    }
});

const Todo = mongoose.model('Todo', schemaTodo);

module.exports = Todo;