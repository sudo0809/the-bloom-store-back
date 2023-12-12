const mongoose = require('mongoose');
const Product = require('./product');

const Schema = mongoose.Schema

const potDetailSchema = new Schema({
    color: { type: String },
    material: { type: String },
})

const plantVariantSchema = new Schema({
    variant_name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    with_pot: {
        type: Boolean,
        required: true,
        default: false
    },
    pot_details: {
        type: potDetailSchema,
        required: function () { return this.with_pot }
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        default: 'INR'
    }
})

const plantSchema = new Schema({
    plant_name: {
        type: String,
        required: true
    },
    variant: {
        type: [plantVariantSchema],
        validate: { validator: plantVariantValidator, message: 'At least one plant detail should be present' }
    }
}, { discriminatorKey: 'kind' })

function plantVariantValidator(variant_array) {
    return variant_array.length > 0
}

module.exports = Product.discriminator('Plant', plantSchema)
