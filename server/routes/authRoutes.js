const express = require('express');
const {checkAuthUser, checkAuthTeacher, checkAuthSuper, checkAuthUser2} = require('../controllers/isAuth');
const router = express.Router();

router.route("/student").get(checkAuthUser)
router.route("/user2").get(checkAuthUser2)
router.route("/faculty").get(checkAuthTeacher)
router.route("/admin").get(checkAuthSuper)

module.exports = router;