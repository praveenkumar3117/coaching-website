const SliderImages = require('../models/SliderImages');
const TeacherImages = require('../models/TeacherImages');

exports.getSliderImages = async (req, res) => {
    try {
        const images = await SliderImages.find({});
        res.status(201).json(images);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.getTeacherImages = async (req, res) => {
    try {
        const images = await TeacherImages.find({});
        res.status(201).json(images);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}