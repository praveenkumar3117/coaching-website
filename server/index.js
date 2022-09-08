const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./db')

const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
connectDB()
const PORT = 5000

app.listen(process.env.PORT||5000, console.log(`running`, PORT))