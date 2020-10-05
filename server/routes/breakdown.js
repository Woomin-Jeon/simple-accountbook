const express = require('express');

const router = express.Router();

const passport = require('../utils/passport');

const service = require('../services/breakdown.service');

router.get('/', passport.authenticate('jwt', { session: false }), service.getBreakdowns);
router.post('/', passport.authenticate('jwt', { session: false }), service.addBreakdown);
router.patch('/', passport.authenticate('jwt', { session: false }), service.updateBreakdown);
router.delete('/', passport.authenticate('jwt', { session: false }), service.deleteBreakdown);

module.exports = router;
