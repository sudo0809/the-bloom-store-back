const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const bcrypt = require('bcrypt')

const login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    async function find_user() {
        const user = await User.findOne({ email: email })
        console.log(user)

        try {
            if (!user) {
                return res.status(400).send({ message: 'No account found. Please Signup' });
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(400).send({ message: "Incorrect password" })
            }

            const token = jwt.sign(
                { user_id: user.id, role: user.role },
                process.env.SECRET_KEY,
                { expiresIn: 30 * 60 }
            );

            return res.cookie("access_token", token, {
                httpOnly: false,
                // secure: process.env.NODE_ENV === "production",
            }).send({ message: "Logged in successfully" });

        } catch (err) {
            console.log(err);
            return res.status(400).send({ message: 'Unable to login!', err: err.message })
        }
    }

    find_user();
};

module.exports = login;