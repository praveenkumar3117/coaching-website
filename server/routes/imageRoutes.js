const express = require('express');
const { getSliderImages, getTeacherImages } = require('../controllers/GetImages');
const { AddSliderImage, AddTeacherImage } = require('../controllers/PostImages');
const router = express.Router();

router.route('/slider-images').get(getSliderImages);
router.route('/get-teacher-images').get(getTeacherImages);
router.route('/add-slider-images').post(AddSliderImage);
router.route('/add-teacher-images').post(AddTeacherImage);

module.exports = router;