const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const SuperUserRoutes = require('./routes/SuperUserRoutes')
const UserRoutes = require('./routes//userRoutes')
const MessageMailRoutes = require('./routes/MessageMailRoutes')
const teachRoutes = require('./routes/TeachRoutes')
const fetchVideos = require('./routes/FetchVideos')
const authRoutes= require('./routes/authRoutes')
const testRoutes = require('./routes/TestRoutes')
const app = express()


app.use(express.json())
app.use(cors())
require("dotenv").config()
connectDB()


const PORT = 5000


app.use('/api/SuperUser',SuperUserRoutes)

app.use('/api/User',UserRoutes)

app.use('/api/Teach',teachRoutes)

app.use('/api/visitor',MessageMailRoutes);

app.use('/api/fetchVideos',fetchVideos)

app.use('/api/auth', authRoutes);

app.use('/api/test',testRoutes)

app.listen(PORT, console.log(`running`, PORT))