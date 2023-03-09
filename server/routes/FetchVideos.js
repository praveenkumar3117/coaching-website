const express = require('express')
const { fetchVideo,FetchVideosFaculty,fetchVideoWithCourseName, removeVideoByURL } = require('../controllers/Video')

const router = express.Router()

router.route('/faculty').post(FetchVideosFaculty)
router.route('/view-video').post(fetchVideo)
router.route('/course-video').post(fetchVideoWithCourseName)
router.route('/delete-video').post(removeVideoByURL)

module.exports = router