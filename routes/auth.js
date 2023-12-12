const express = require('express')
const ApiRequestPath = require('../lib/helpers/api_request_path')

const routes = express.Router()

routes.post('/login', ApiRequestPath('auth', 'login'));
routes.get('/logout', ApiRequestPath('auth', 'logout'));

module.exports = routes