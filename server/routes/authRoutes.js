const express = require('express');
const {checkAuthUser, checkAuthTeacher, checkAuthSuper} = require('../controllers/isAuth');
const router = express.Router();

router.route("/student").get(checkAuthUser)
router.route("/faculty").get(checkAuthTeacher)
router.route("/admin").get(checkAuthSuper)

module.exports = router;