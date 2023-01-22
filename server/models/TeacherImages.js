const mongoose = require("mongoose")

const TeacherImagesSchema = mongoose.Schema(
    {
        url: { type: String, unique: true, required: true },
        tName:{ type: String, required: true },
        exp: { type: Number, required: true }
        
    },
    { timestaps: true }
)

const TeacherImages = mongoose.model("TeacherImages", TeacherImagesSchema)

module.exports = TeacherImages;