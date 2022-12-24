const mongoose = require("mongoose")

const testSchema = mongoose.Schema(
    {
        chapterName: { type: String, required: true },
        subject: { type: String, required: true },
        JEE: { 
            type: Boolean,
            required: true,
        },
        NEET: { 
            type: Boolean,
            required: true,
        },
        Foundation: { 
            type: Boolean,
            required: true,
        },
        batchYear : { type: Number, required: true },
        tCode: { type: String, required: true, unique: true },
        testUrl : { type: String, required: true }
    },
    { timestaps: true }
)

const Test = mongoose.model("Test", testSchema)

module.exports = Test