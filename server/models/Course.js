const mongoose = require("mongoose")

const courseSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        user2Array : [String], // External Students -- > Login 
        Date : {type: Date},
        JEE: { 
            type: Boolean,
            required: true,
        },
        NEET: { 
            type: Boolean,
            required: true,
        },
        category: {   // Internal Students -- > login SuperUser
            type: Number,
            enum: [1,2,3,4,5],
            required: true,
        },
    },
    { timestaps: true }
)


const Course = mongoose.model("course", courseSchema)

module.exports = Course