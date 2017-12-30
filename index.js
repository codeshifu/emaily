require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// connect mongodb
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
// init models
require('./models/User');

// passport
require('./services/passport');
// pasport auth routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
				console.log(`Server listening on port ${PORT}`);
});