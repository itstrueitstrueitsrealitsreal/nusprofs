require('dotenv').config()
// default settings
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
app.use(express.json())
console.log(process.env.NODE_ENV)
// router
const routes = require('./routes/routes')
app.use('/api', routes)
// middleware
const { logger, logEvents } = require('./middleware/logger')
app.use(logger)
const errorHandler = require('./middleware/errorHandler')
app.use(errorHandler)
const cookieParser = require('cookie-parser')
app.use(cookieParser())
// CORS
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
app.use(cors(corsOptions))
// DB
const connectDB = require('./config/dbConnection')
const mongoose = require('mongoose')
connectDB()
// listen to server and connect to MongoDB
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
// listen to connection error
mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.errno}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

// Create
app.post('/post', (req, res) =>{
    res.send("Post API")
})

// Professors
app.get('/professors', async (req, res) => {
    // Logic to fetch list of all professors
    try {
        const professors = await Professors.find();
        if (professors) {
            res.status(200).json(professors)
        } else {
            res.status(404).json({ message: 'No professors found' })
        }
    } catch (e) {
        res.status(500).json({ message: e })
    }
})

// Reviews
app.get('/reviews', async (req, res) => {
    // Logic to fetch list of all reviews
    try {
        const reviews = await Reviews.find();
        if (reviews) {
            res.status(200).json(reviews)
        } else {
            res.status(404).json({ message: 'No reviews found' })
        }
    } catch (e) {
        res.status(500).json({ message: e })
    }
})

// Read
app.get('/get', (req, res) => {
    res.send("Get API")
})