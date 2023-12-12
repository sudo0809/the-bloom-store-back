const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    email_verified: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    mobile_country_code: {
        type: String,
        required: [function () {
            return this.mobile_number !== undefined
        }, 'Mobile Country Code is required with mobile number']
    },
    mobile_number: {
        type: String,
        validate: {
            validator: mobileNumberValidator,
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    mobile_number_verified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: ['admin', 'buyer', 'seller'],
            message: props => `${props.value} is not a valid role!`
        }
    }
});

function mobileNumberValidator (v) {
    return /^[6-9]\d{9}$/.test(v);
}

module.exports = mongoose.model('User', UserSchema);