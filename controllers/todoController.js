const Todo = require('../models/todoModel');
const ObjectID = require('mongodb').ObjectID;

let getTodoUser = (req, res) => {
    Todo.find({
        userID: req.simpanData.id
    })
    .then((result) => {

        if(!result[0]){
            res.status(403).json({
                msg: 'not found'
            })    
        }

        res.status(200).json({
            msg : 'success',
            data : result
        });
    })
    .catch(err => {
        res.status(403).json(err)
    });
}

let getTodo = (req, res) => {
    Todo.find({
        _id : ObjectID(req.params.id),
        userID: req.simpanData.id
    })
    .then((result) => {

        if(!result[0]){
            res.status(403).json({
                msg: 'not found'
            })
        }

        res.status(200).json({
            msg: 'success',
            data: result
        });
    })
    .catch(err => {
        res.status(403).json(err)
    });
}

let createTodo = (req, res) => {
    const newTodo = new Todo({
        userID: req.simpanData.id,
        title : req.body.title,
        desc : req.body.desc
    });

    newTodo.save()
    .then((result) => {
        res.status(200).json({
            msg : 'success',
            data : result
        })
    })
    .catch(err => {
        res.status(500).json(err);
    });

}

let updateTodo = (req, res) => {
    Todo.findOne({
        _id: ObjectID(req.params.id),
        userID: req.simpanData.id
    })
    .then((result) => {
        if(!result){
            res.status(403).json({
                msg : 'not found'
            })    
        }
        
        result.title = req.body.title || result.title,
        result.desc = req.body.desc || result.desc,
        result.action = result.action
        
        result.save()
        .then((setResult) => {
            res.status(200).json({
                msg: 'success',
                data: result
            });
        }).catch(err => {
            res.status(500).json(err)
        })
    }).catch(err => {
        res.status(500).json(err)
    });
}

let markTodo = (req, res) => {
    Todo.findOne({
        _id: ObjectID(req.params.id),
        userID: req.simpanData.id
    })
    .then((result) => {
        if (!result) {
            res.status(403).json({
                msg: 'not found'
            })
        }

        result.action = req.body.action || req.body.action

        result.save();
        res.status(200).json({
            msg: 'success',
            data: result
        });
    })
    .catch(err => {
        res.status(403).json(err);
    });
}

let deleteTodo = (req, res) => {
    Todo.remove({
        _id : ObjectID(req.params.id),
        userID: req.simpanData.id
    })
    .then((result) => {
        res.status(200).json({
            msg : 'Success Remove'
        })
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

module.exports = {
    getTodoUser,
    getTodo,
    createTodo,
    updateTodo,
    markTodo,
    deleteTodo
}