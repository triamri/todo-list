const router = require('express').Router();
const todo = require('../controllers/todoController');
const checkLogin = require('../middleware/auto');

router.get('/', checkLogin.isLogin, todo.getTodoUser);
router.post('/', checkLogin.isLogin, todo.createTodo);
router.get('/:id', checkLogin.isLogin, todo.getTodo);
router.put('/update/:id', checkLogin.isLogin, todo.updateTodo);
router.put('/mark/:id', checkLogin.isLogin, todo.markTodo);
router.delete('/remove/:id', checkLogin.isLogin, todo.deleteTodo);

module.exports = router;