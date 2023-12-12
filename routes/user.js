const express = require('express');
const ApiRequestPath = require('../lib/helpers/api_request_path')

const router = express.Router();

router.get('/user', (req, res) => {
    res.send('User Page');
});

const service = 'users'


router.get('/get-user', ApiRequestPath(service, 'getUser'));
router.post('/create-user', ApiRequestPath(service,'createUser'));
router.put('/update-user/:id', ApiRequestPath(service,'updateUser'));

module.exports = router;