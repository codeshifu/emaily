const requireLogin = require('../appMiddlewares/requireLogin')
const requireCredits = require('../appMiddlewares/requireCredits')

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

  })
}
