const router = require('express').Router();
const controllers = require('../controllers/users');

router.get('/', controllers.getUsers);
router.post('/add', controllers.postUser);

module.exports = router;

