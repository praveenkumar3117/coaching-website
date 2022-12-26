const express = require('express')
const { createTest, listTests, listTestsSuper, listTestsTeacher } = require('../controllers/Test')

const router = express.Router()

router.route('/create').post(createTest)
router.route('/view/superuser').post(listTestsSuper)
router.route('/view/student').post(listTests)
router.route('/view/teacher').post(listTestsTeacher)

module.exports = router 