const requireLogin = require('../appMiddlewares/requireLogin')

module.exports = (app) => {
  app.get('/api/surveys', requireLogin, (req, res) => {

  })
}
