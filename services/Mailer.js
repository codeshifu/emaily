const sendgrid = require('sendgrid')
const helper = sendgrid.mail
const keys = require('../config/keys')

class Mailer extends helper.Mail {
  constructor ({subject, recipients}, content) {
    super()

    this.sendgridObj = sendgrid(keys.sendGridKey)

    this.from_email = new helper.Email('no-reply@emaily.com')
    this.subject = subject
    this.body = new helper.Content('text/html', content)
    this.recipients = this.formatAddresses(recipients)

    this.addContent(this.body)
    // track links in email
    this.addClickTracking()
    this.addRecipients()
  }

  /**
   * formats an array of email objects
   * @param {[]} recipients
   */
  formatAddresses (recipients = []) {
    return recipients.map(({email}) => {
      return new helper.Email(email)
    })
  }

  /**
   * Enables tracking on email links
   * @returns null
   */
  addClickTracking () {
    const trackingSettings = new helper.TrackingSettings()
    const clickTracking = new helper.ClickTracking(true, true)

    trackingSettings.setClickTracking(clickTracking)
    this.addTrackingSettings(trackingSettings)
  }

  addRecipients () {
    const personlize = new helper.Personalization()

    this.recipients.forEach(recipient => {
      personlize.addTo(recipient)
    })

    this.addPersonalization(personlize)
  }

  /**
   * sends email
   *
   * @returns SendGrid.Rest.Response
   * @memberof Mailer
   */
  async send () {
    const request = this.sendgridObj.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    })

    const response = await this.sendgridObj.API(request)
    return response
  }
}

module.exports = Mailer
