const express = require('express');
const { getSliderImages } = require('../controllers/GetImages');
const { AddSliderImage } = require('../controllers/PostImages');
const router = express.Router();

router.route('/slider-images').get(getSliderImages);
router.route('/add-slider-images').post(AddSliderImage);

module.exports = router;