var express = require('express');
var router = express.Router();
const {home, proccessForm, user, reset} = require('../controllers/indexController');
const registerValidator = require('../validations/formValidator');

router.get('/', home);
/* router.post('/', registerValidator, proccessForm); */
router.get('/user', user);
router.get('/user/reset', reset);

module.exports = router;