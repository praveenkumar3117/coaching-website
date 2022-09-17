const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const SuperUserRoutes = require('./routes/SuperUserRoutes')

const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
connectDB()
const PORT = 5000

app.use('/api/SuperUser',SuperUserRoutes)
app.listen(PORT, console.log(`running`, PORT))