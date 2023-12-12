const Product = require('../../models/product');

const listProducts = (req, res, next) => {
    POSSIBLE_FILTERS = ['kind']
    DEFAULT_PAGE = 1
    DEFAULT_PAGE_LIMIT = 2

    const payload = req.query
    const request_filters = payload.filter[0]
    const page = payload.page || DEFAULT_PAGE
    const page_limit = payload.page_limit || DEFAULT_PAGE_LIMIT

    const valid_filters = Object.keys(request_filters)
        .filter(
            i => POSSIBLE_FILTERS.includes(i)
        ).reduce((acc, key) => {
            acc[key] = request_filters[key];
            return acc;
        }, {})

    Product.find(valid_filters).limit(page_limit).skip((page - 1) * page_limit).then((data) => {
        return res.send(data)
    }).catch((err) => {
        console.log(err)
        return res.status(400).send(err.message)
    })

}

module.exports = listProducts