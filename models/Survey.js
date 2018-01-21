const mongoose = require('mongoose')
const {Schema} = mongoose

const SurveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String]
})

mongoose.model('survey', SurveySchema)
