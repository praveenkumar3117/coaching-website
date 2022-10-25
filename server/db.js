const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {

        const conn = await mongoose.connect("mongodb+srv://Vulture:v1v2v3v4v5v6v7v8v9v10@cluster0.qp35svk.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {

        console.log(`Error: ${error.message}`)
        process.exit()

    }
}

module.exports = connectDB