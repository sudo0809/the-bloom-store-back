const bycrpt = require('bcrypt');
const User = require("../../models/user");
const sendMail = require("../../lib/mailer");
require('dotenv').config();

createUser = (req, res, next) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const mobile_number = req.body.mobile_number;
    const mobile_country_code = req.body.mobile_country_code;
    const role = req.body.role;
    
    const saltRounds = 10;
    const passwordHash = bycrpt.hashSync(password, saltRounds);

    const user = new User({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: passwordHash,
        mobile_number: mobile_number,
        mobile_country_code: mobile_country_code,
        role: role
    });

    user.save()
        .then(result => {
            res.send({ data: user });
            if (process.env.NODE_ENV === "production"){
                // sendMail('Sugat', 'sugatdhole@gmail.com', name, email, 'Welcome mail', "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!");
            }
        }).catch(err => {
            let errMsg;
            if (err.code == 11000) {
                const key = Object.keys(err.keyValue)[0]
                errMsg = key[0].toUpperCase() + key.slice(1) + " already exists.";
            } else {
                errMsg = err.message;
            }
            console.log(err)
            res.status(400).send({ message: errMsg });
        })
}

module.exports = createUser