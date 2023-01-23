const express = require('express');
const { getSliderImages, getTeacherImages, AddSliderImage, AddTeacherImage, removeSliderImages, removeTeacherImages } = require('../controllers/Images');
const router = express.Router();

router.route('/slider-images').get(getSliderImages);
router.route('/get-teacher-images').get(getTeacherImages);
router.route('/add-slider-images').post(AddSliderImage);
router.route('/add-teacher-images').post(AddTeacherImage);
router.route('/remove-slider-images').delete(removeSliderImages);
router.route('/remove-teacher-images').delete(removeTeacherImages);

module.exports = router;