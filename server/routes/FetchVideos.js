const express = require('express')
const { fetchVideo,FetchVideosFaculty,fetchVideoWithCourseName } = require('../controllers/Video')

const router = express.Router()

router.route('/faculty').post(FetchVideosFaculty)
router.route('/view-video').post(fetchVideo)
router.route('/course-video').post(fetchVideoWithCourseName)

module.exports = router