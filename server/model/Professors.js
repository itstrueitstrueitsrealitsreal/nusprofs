const mongoose = require('mongoose')

const ProfessorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})

export default Professors = mongoose.model('Professors', ProfessorsSchema)
