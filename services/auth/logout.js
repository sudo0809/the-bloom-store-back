const cookie = require('cookie-parser');

const logout = (req, res, next) => {
    return res.clearCookie("access_token")
        .status(200)
        .send({ message: "Successfully logged out" });
}

module.exports = logout;