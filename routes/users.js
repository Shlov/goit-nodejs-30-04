const express = require('express');

const auth = require('../middlewares/auth');

const validate = require('../helpers/validateUser')

const ctrl = require('../controllers/users');


const router = express.Router();

router.post('/register', validate.validateUserRegister,  ctrl.register);

router.post('/login', validate.validateUserLogin, ctrl.login);

router.post('/logout', auth, ctrl.logout);

router.get('/current', auth, ctrl.current);

router.patch('/', auth, ctrl.patchSubscription)

module.exports = router;