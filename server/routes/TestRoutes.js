const express = require('express')
const { createTest, listTests } = require('../controllers/Test')

const router = express.Router()

router.route('/create').post(createTest)
router.route('/view').post(listTests)

module.exports = router 