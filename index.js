const mongoose = require('mongoose');
const express = require('express');
require('./services/passport');

// connect mongodb
mongoose.connect(process.env.DATABASE, {useMongoClient: true});

const app = express();
// auth routes
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
				console.log(`Server listening on port ${PORT}`);
});