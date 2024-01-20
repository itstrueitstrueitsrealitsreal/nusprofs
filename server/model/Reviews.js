const mongoose = require('mongoose')

const ReviewsSchema = new mongoose.Schema({
    quality: {
        type: Number,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    profName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    helpfulness: {
        type: Number,
        required: true
    },
})

export default Reviews = mongoose.model('Reviews', ReviewsSchema)