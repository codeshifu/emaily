const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {database} = require('./config/keys')

// connect mongodb
mongoose.connect(database)
mongoose.Promise = global.Promise
require('./models/User')
require('./models/Survey')

require('./services/passport') // google strategy
require('./appMiddlewares')(app) // app middleware

// routes
require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
