const RecipientSchema = require('./Recipient')
const mongoose = require('mongoose')
const {
  Schema
} = mongoose

const SurveySchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  dateSent: Date,
  lastResponded: Date
})

mongoose.model('surveys', SurveySchema)
