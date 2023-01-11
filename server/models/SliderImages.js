const mongoose = require("mongoose")

const SliderImagesSchema = mongoose.Schema(
    {
        url: { type: String, unique: true, required: true },
        
    },
    { timestaps: true }
)

const SliderImages = mongoose.model("SliderImages", SliderImagesSchema)

module.exports = SliderImages;