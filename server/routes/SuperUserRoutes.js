const express = require('express')
const { login } = require('../controllers/SuperUser')
// const { protect } = require('../middleware/auth');
const { Superprotect } = require('../middleware/SuperAuth');

const router = express.Router()

router.route('/login/admin').post(login);

module.exports = router