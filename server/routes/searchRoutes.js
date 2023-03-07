const express = require('express')
const router = express.Router()
const {findTeachers, findUsers, findUsers2, findCourses} = require('../controllers/find')

router.route('/teachers').post(findTeachers)
router.route('/users').post(findUsers)
router.route('/users2').post(findUsers2)
router.route('/courses').post(findCourses)

module.exports = router