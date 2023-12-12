const jwt = require('jsonwebtoken');

const adminAuthorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(403).send({ message: "Not authorized, token not available" })
    }
    try {
        const data = jwt.verify(token, process.env.SECRET_KEY);

        if (!data.role || data.role != 'admin') {
            return res.status(403).send({ message: "Not authorized" })
        }
        return next()
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(403).send({message: "Session Expired. Please Login again!"})
        }
        return res.status(403).send(err)
    }
}

const basicAuthorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(403).send({ message: "Not authorized, token not available" })
    }
    try {
        const data = jwt.verify(token, process.env.SECRET_KEY);
        const user_id = data.user_id;
        return next()
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(403).send({message: "Session Expired. Please Login again!"})
        }
        return res.status(403).send(err)
    }
}

exports.adminAuthorization = adminAuthorization;
exports.basicAuthorization = basicAuthorization;
