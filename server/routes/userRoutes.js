const express = require('express')
const { authUser,registerUser } = require('../controllers/User')
const { Superprotect } = require('../middleware/SuperAuth')

const router = express.Router()

router.route('/registerUser').post(Superprotect,registerUser)
router.route('/loginUser').post(authUser)

module.exports = router