require('dotenv').config()
const Mailjet = require('node-mailjet')

const sendMail = (from, from_email, to, to_email, subject, html) => {
    const mailjet = Mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY)

    const request = mailjet.post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": from_email,
                        "Name": from
                    },
                    "To": [
                        {
                            "Email": to_email,
                            "Name": to
                        }
                    ],
                    "Subject": subject,
                    "TextPart": "My first Mailjet email",
                    "HTMLPart": html,
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        })

    request
        .then((result) => {
            console.log(result.body)
            return result
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = sendMail;