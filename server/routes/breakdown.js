const express = require('express');

const router = express.Router();

const passport = require('../utils/passport');

const service = require('../services/breakdown.service');

router.get('/', passport.authenticate('jwt', { session: false }), service.getBreakdowns);
router.post('/', passport.authenticate('jwt', { session: false }), service.addBreakdown);
router.patch('/', passport.authenticate('jwt', { session: false }), service.updateBreakdown);
router.delete('/:breakdownId', passport.authenticate('jwt', { session: false }), service.deleteBreakdown);
router.get('/month/:month', passport.authenticate('jwt', { session: false }), service.getBreakdownsByMonth);

module.exports = router;
