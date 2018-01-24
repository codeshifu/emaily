const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = Schema({
  googleId: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    default: 0
  }
})

mongoose.model('user', UserSchema)
