const requireLogin = require('../appMiddlewares/requireLogin')
const requireCredits = require('../appMiddlewares/requireCredits')
const Survey = require('mongoose').model('surveys')
const surveyTemplate = require('../services/emailTemplates/survey')
const Mailer = require('../services/Mailer')

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const {title, body, subject, recipients} = req.body

    const survey = new Survey({
      _user: req.user.id,
      title,
      body,
      subject,
      recipients: recipients.split(',').map((email) => ({email: email.trim()}))
    })

    const mailer = new Mailer(survey, surveyTemplate(survey))
    try {
      await mailer.send()
      await survey.save()
      req.user.credits -= 1
      const user = await req.user.save()
      res.send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
