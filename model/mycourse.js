const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
   course: {
    type: String,
    required: true
  },
  currentTopicName:{
    type: String,
    required: true,
  },
  courseLogo: {
    type: String,
    required: true,
  },
  totalCompletedTopic: {
    type: Number,
    required: true,
  },
  totalTopicNo:{
    type: Number,
    required: true,
  },
  tutorName:{
    type: String,
    required: true,
  },
  tutorImage:{
    type: String,
    required: true,
  },
  color:{
    type: String,
    required: true,
  }
})



module.exports=mongoose.model('Mycourse', courseSchema);