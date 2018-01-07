const router = require('express').Router();
const user = require('../controllers/userController');

/* GET users listing. */
router.post('/signin', user.getUser);
router.post('/signup', user.createUser);

module.exports = router;
