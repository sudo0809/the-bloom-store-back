const mongoose = require('mongoose');

const Schema = mongoose.Schema

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true
    }
}, { discriminatorKey: 'kind' })

module.exports = mongoose.model('Product', productSchema);
