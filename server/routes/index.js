const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/breakdown', require('./breakdown'));

module.exports = router;
