import mongoose from "mongoose";

const ProfessorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalQuality: {
        type: Number,
        required: false,
        default: 0
    },
    totalDifficulty: {
        type: Number,
        required: false,
        default: 0
    },
    totalReviews: {
        type: Number,
        required: false,
        default: 0
    },
})

const Professors = mongoose.model('Professors', ProfessorsSchema);

export default Professors;
