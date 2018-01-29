const requireLogin = require('../appMiddlewares/requireLogin')
const requireCredits = require('../appMiddlewares/requireCredits')
const Survey = require('mongoose').model('surveys')
const surveyTemplate = require('../services/emailTemplates/survey')
const Mailer = require('../services/Mailer')

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const {title, body, subject, recipients} = req.body

    const survey = new Survey({
      _user: req.user.id,
      title,
      body,
      subject,
      recipients: recipients.split(',').map((email) => ({email: email.trim()}))
    })

    const mailer = new Mailer(survey, surveyTemplate(survey))
    mailer.send()
  })
}
