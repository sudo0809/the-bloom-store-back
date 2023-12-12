const User = require('../../models/user');

const getUser = (req, res, next) => {
    const filters = req.query.filter[0];

    User.find(filters).then((user) => {
        return res.send(user);
    }).catch(err => {
        console.log(err);
        return res.send(err);
    })
};

module.exports = getUser;