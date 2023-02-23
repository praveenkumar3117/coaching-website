const express = require('express');
const { AddCourse, FetchCourse, FetchCourseWithCategory, FetchCourseWithUser2, FetchCourseNotInUser2 } = require('../controllers/Course');
const router = express.Router();

router.route('/add-course').post(AddCourse);
router.route('/fetch-course').get(FetchCourse);
router.route('/fetch-course-with-category').post(FetchCourseWithCategory);
router.route('/fetch-course-with-user2').post(FetchCourseWithUser2);
router.route('/fetch-course-not-in-user2').post(FetchCourseNotInUser2)

module.exports = router;