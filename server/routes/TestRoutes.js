const express = require('express')
const { createCSV, listCSV } = require('../controllers/CSV')
const { createTest, listTests, listTestsSuper, listTestsTeacher } = require('../controllers/Test')

const router = express.Router()

router.route('/create').post(createTest)
router.route('/view/superuser').post(listTestsSuper)
router.route('/view/student').post(listTests)
router.route('/view/teacher').post(listTestsTeacher)
router.route('/postCSV').post(createCSV)
router.route('/view-CSV').post(listCSV)
module.exports = router 