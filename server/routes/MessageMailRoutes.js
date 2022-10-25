const express = require('express')
const { MessageMailer } = require('../middleware/MessageMail');

const router = express.Router()

router.route('/message').post(MessageMailer);

module.exports = router