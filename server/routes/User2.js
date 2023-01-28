const express = require('express')
const { authUser,registerUser } = require('../controllers/User2')
const { protect2 } = require('../middleware/User2Protect')

const router = express.Router()

router.route('/register/user2').post(protect2,registerUser);
router.route('/login/user2').post(authUser);

module.exports = router