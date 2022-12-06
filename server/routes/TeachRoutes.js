const express = require('express')
const { authTeacher,registerTeacher } = require('../controllers/Teacher')
const { Superprotect } = require('../middleware/SuperAuth')
const {protect} = require('../middleware/authTeach');
const {AddVideo, FetchVideos} = require('../controllers/Video')

const router = express.Router()

router.route('/register/user').post(Superprotect, registerTeacher);
router.route('/login/user').post(authTeacher);
router.route('/Upload-Video').post(AddVideo);
router.route('/watch').post(FetchVideos);

module.exports = router