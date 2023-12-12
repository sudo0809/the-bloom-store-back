const User = require("../../models/user");

const updateUser = (req, res, next) => {
    const user_id = req.params.id;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const mobile_number = req.body.mobile_number;
    const mobile_country_code = req.body.mobile_country_code;

    async function updateUser() {
        const result = await User.findById(user_id)

        if (result === null) {
            const err = new Error('Invalid User!')
            return res.status(400).send({ message: err.message });
        }

        result.first_name = first_name
        result.last_name = last_name
        result.mobile_number = mobile_number
        result.mobile_country_code = mobile_country_code

        try {
            const updatedUser = await result.save()
            return res.send(updatedUser);
        } catch (err) {
            console.log(err)
            res.status(400).send({ message: err.message });
        }
    }

    updateUser();
}

module.exports = updateUser;