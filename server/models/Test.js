const mongoose = require("mongoose")

const testSchema = mongoose.Schema(
    {
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
        testUrl : { type: String, required: true, unique:true },
        testNum: {type:Number, required:true},
        startTime: {type: Date, required:true},
        endTime: {type: Date, required:true},
    },
    { timestaps: true }
)

const Test = mongoose.model("Test", testSchema)

module.exports = Test