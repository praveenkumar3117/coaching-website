const mongoose = require("mongoose")

const testSchema = mongoose.Schema(
    {
        Physics: { 
            type: Boolean
        },
        Chem: { 
            type: Boolean
        },
        Maths: { 
            type: Boolean
        },
        Bio: { 
            type: Boolean
        },
        JEE: { 
            type: Boolean
        },
        NEET: { 
            type: Boolean
        },
        Foundation: { 
            type: Boolean
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