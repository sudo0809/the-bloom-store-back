const express = require('express');
const ApiRequestPath = require('../lib/helpers/api_request_path');

router = express.Router()

const service = 'plants'
router.post('/create-plant', ApiRequestPath(service, 'createPlant'))

module.exports = router;