const express = require('express');

const router = express.Router();

const service = require('../services/auth.service');

router.post('/', service.login);

module.exports = router;
