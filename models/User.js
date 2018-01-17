const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = Schema({
    googleId: String,
    credits: {
        type: Number,
        default: 0
    }
});

mongoose.model('user', UserSchema);