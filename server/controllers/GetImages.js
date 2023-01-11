const SliderImages = require('../models/SliderImages');

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