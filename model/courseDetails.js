const mongoose = require('mongoose')

const courseDetailSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    schedule: {
        type: Object,
        required: true
    },
    tutor: {
        type: Object,
        required: true,
    },
    courseList: {
        type: Array,
        required: true,
    },
})



module.exports = mongoose.model('Coursedetail', courseDetailSchema);