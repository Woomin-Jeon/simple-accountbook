const express = require('express');

const router = express.Router();

const passport = require('../utils/passport');

const { getBreakdowns, addBreakdown, deleteBreakdown } = require('../models/breakdown');

const { getRandomString, getCurrentDate } = require('../utils/generator');

router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { id: userId } = req.user;

  const breakdowns = await getBreakdowns(userId);

  res.status(200).json({ breakdowns });
});

router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { amount, content, method, come, categoryId } = req.body;
  const { id: userId } = req.user;
  const id = getRandomString();
  const date = getCurrentDate();

  const parameters = {
    id, amount, content, method, come, date, userId, categoryId,
  };

  const state = await addBreakdown(parameters);

  if (state === false) {
    res.status(500).send('Server Error');
    return;
  }

  res.status(200).json({ breakdownId: id });
});

router.delete('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { id: userId } = req.user;
  const { breakdownId } = req.body;

  await deleteBreakdown(userId, breakdownId);

  res.send();
});

module.exports = router;
