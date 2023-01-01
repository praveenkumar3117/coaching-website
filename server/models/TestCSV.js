const mongoose = require("mongoose")

const testCSVSchema = mongoose.Schema(
    {
        url: { type: String, required: true },
        testNum: { type: Number, required: true },
        testUrl: { type: String, required: true },
        batchYear: { type: Number, required: true },
        Physics: {
            type: Boolean,
            required: true,
        },
        Chem: {
            type: Boolean,
            required: true,
        },
        Maths: {
            type: Boolean,
            required: true,
        },
        Bio: {
            type: Boolean,
            required: true,
        },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
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
    },
    { timestaps: true }
)

const TestCSV = mongoose.model("CSV", testCSVSchema)

module.exports = TestCSV