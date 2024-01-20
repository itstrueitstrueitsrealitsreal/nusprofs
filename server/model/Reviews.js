import mongoose from "mongoose";

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
    timeCreated: {
        type: Date,
        default: new Date(Date.now())
    }
})

const Reviews = mongoose.model('Reviews', ReviewsSchema)

export default Reviews