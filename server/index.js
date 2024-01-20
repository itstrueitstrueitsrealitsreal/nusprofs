import * as dotenv from 'dotenv'
dotenv.config();
// default settings
import express from "express"
const app = express()
const PORT = process.env.PORT || 3500
app.use(express.json())
console.log(process.env.NODE_ENV)
// router
// const routes = require('./routes/routes')
// app.use('/api', routes)
// middleware
// const { logger, logEvents } = require('./middleware/logger')
// app.use(logger)
// const errorHandler = require('./middleware/errorHandler')
// app.use(errorHandler)
import cookieParser from 'cookie-parser'
app.use(cookieParser())
// CORS
import cors from 'cors'
app.use(cors())
// DB
import connectDB from './config/dbConnection.js'
import mongoose from "mongoose";
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

import Professors from './model/Professors.js';
import Reviews from './model/Reviews.js';

/**
 * API for Professors
 */
app.get('/professors', async (req, res) => {
    try {
        const professors = await Professors.find();
        if (professors) {
            res.status(200).json(professors)
        } else {
            res.status(404).json({ message: 'No professors found' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
})

app.post('/professors', async (req, res) => {
    try {
        const { name } = req.body;
        const existingProfessor = await Professors.findOne({ name });
        if (existingProfessor) {
            return res.status(404).json({
                message: `Professor ${name} exists in database`
            });
        }
        const newProfessor = new Professors({ name });
        await newProfessor.save()
        return res.status(200).json({ 
            message: `Professor ${name} added successfully` 
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
})

/**
 * API for Reviews
 */
app.get('/reviews', async (req, res) => {
    try {
        const reviews = await Reviews.find();
        if (reviews) {
            res.status(200).json(reviews)
        } else {
            res.status(404).json({ message: 'No reviews found' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
})

app.post('/reviews', async (req, res) => {
    try {
        const { quality, difficulty, course, profName, date, content } = req.body;
        const newReview = new Reviews({ quality, difficulty, course, profName, date, content });
        await newReview.save()
        return res.status(200).json({ 
            message: `Review added successfully` 
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
})

app.delete('/reviews', async (req, res) => {
    try {
      await Reviews.deleteOne();
      res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
});

/**
 * Check if API is working
 */
app.get('/', (req, res) => {
    res.send("200 OK");
})