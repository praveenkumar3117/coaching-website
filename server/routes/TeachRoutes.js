const express = require('express')
const { authTeacher,registerTeacher } = require('../controllers/Teacher')
const { Superprotect } = require('../middleware/SuperAuth')
const {protect} = require('../middleware/authTeach');

const router = express.Router()

router.route('/register/user').post(Superprotect, registerTeacher);
router.route('/login/user').post(authTeacher);

module.exports = router