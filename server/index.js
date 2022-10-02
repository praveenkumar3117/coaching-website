const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const SuperUserRoutes = require('./routes/SuperUserRoutes')
const UserRoutes = require('./routes//userRoutes')

const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
connectDB()
const PORT = 5000

app.use('/api/SuperUser',SuperUserRoutes)
app.use('/api/User',UserRoutes)
app.listen(PORT, console.log(`running`, PORT))