const express = require('express');
const { adminAuthorization, basicAuthorization } = require('../services/auth/authorization');
const ApiRequestPath = require('../lib/helpers/api_request_path')

const router = express.Router();
const service = 'products'

router.get('/products', basicAuthorization, ApiRequestPath(service, 'listProducts'));
router.post('/create-product', adminAuthorization, ApiRequestPath(service, 'createProduct'))

module.exports = router;
