const {domain} = require('../../config/keys')

module.exports = ({body}) => {
  return `
    <html>
        <body>
            <div style="text-align: center">
                <h3>I'd like your input!</h3>
                <p>Please answer the following question:</p>
                <p>${body}</p>
                <div>
                    <a href="${domain}/api/surveys/thanks">Yes</a>
                </div>
                <div>
                    <a href="${domain}/api/surveys/thanks">No</a>
                </div>
            </div>
        </body>
    </html>
  `
}
