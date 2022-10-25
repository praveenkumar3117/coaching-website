const mongoose = require("mongoose")

const videoSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        Date : {type: Date, required: true},
        batch: { 
            type: String,
            enum: ['JEE', 'NEET', 'Foundation'],
            required: true,
        },
        topic: {
            type: String,
            required: true
        },
        chapter: {
            type: String,
            required: true
        },
        pic: {
            type: "String",
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    { timestaps: true }
)


const Video = mongoose.model("Video", videoSchema)

module.exports = Video