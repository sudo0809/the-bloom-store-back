const Product = require('../../models/product')


const createProduct = (req, res, next) => {
    const product_name = req.body.product_name

    const product = new Product({product_name: product_name})

    product.save().then((product) => {
        res.send(product)
    }).catch((err) => {
        console.log(err)
        res.status(400).send(err.message)
    })
};

module.exports = createProduct;