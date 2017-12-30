const express = require('express');
const mongoose = require('mongoose');

// init models
require('./models/User');

// connect mongodb
mongoose.connect(process.env.DATABASE, {useMongoClient: true});

const app = express();

// passport
require('./services/passport');
// pasport auth routes
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
				console.log(`Server listening on port ${PORT}`);
});