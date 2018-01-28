const {Schema} = require('mongoose')

const RecipientSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  responded: {
    type: Boolean,
    default: false,
    required: true
  }
})

module.exports = RecipientSchema
