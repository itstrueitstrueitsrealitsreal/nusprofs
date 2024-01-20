import mongoose from "mongoose";

const ProfessorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})

const Professors = mongoose.model('Professors', ProfessorsSchema);

export default Professors;
