const mongoose = require("mongoose")

const courseSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        user2Array : [String],
        Date : {type: Date},
        JEE: { 
            type: Boolean,
            required: true,
        },
        NEET: { 
            type: Boolean,
            required: true,
        },
        category: {
            type: Number,
            enum: [1,2,3,4,5],
            required: true,
        },
        pic: {
            type: "String",
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    { timestaps: true }
)


const Course = mongoose.model("course", courseSchema)

module.exports = Course