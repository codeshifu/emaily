const mongoose = require('mongoose')
const {Schema} = mongoose

const SurveySchema = new Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  subject: {type: String, required: true},
  recipients: [String]
})

mongoose.model('survey', SurveySchema)
