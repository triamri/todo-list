const router = require('express').Router();
const todo = require('../controllers/todoController');
const checkLogin = require('../middleware/auto');

router.get('/:id',  checkLogin.isLogin, todo.getTodoUser);
router.post('/:id', checkLogin.isLogin, todo.createTodo);
// router.get('/:id', checkLogin.isLogin, todo.getTodo);
router.put('/update/:id/:iddata', checkLogin.isLogin, todo.updateTodo);
router.put('/mark/:id/:iddata', checkLogin.isLogin, todo.markTodo);
router.delete('/remove/:id/:iddata', checkLogin.isLogin, todo.deleteTodo);

module.exports = router;