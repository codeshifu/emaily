const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = Schema({
    googleId: String
});

mongoose.model('user', UserSchema);