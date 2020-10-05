const { getRandomString, getCurrentDate } = require('../utils/generator');

const model = require('../models/breakdown');

const getBreakdowns = async (req, res) => {
  const { id: userId } = req.user;

  const breakdowns = await model.getBreakdowns(userId);

  res.status(200).json({ breakdowns });
};

const addBreakdown = async (req, res) => {
  const { amount, content, method, come, categoryId } = req.body;
  const { id: userId } = req.user;
  const id = getRandomString();
  const date = getCurrentDate();

  const parameters = {
    id, amount, content, method, come, date, userId, categoryId,
  };

  const state = await model.addBreakdown(parameters);

  if (state === false) {
    res.status(500).send('Server Error');
    return;
  }

  res.status(200).json({ breakdownId: id });
};

const updateBreakdown = async (req, res) => {
  const { id: userId } = req.user;
  const {
    breakdownId, amount, content, method, come, date, categoryId,
  } = req.body;

  const parameters = {
    breakdownId, amount, content, method, come, date, userId, categoryId,
  };

  await model.updateBreakdown(parameters);

  res.status(200).send('Success');
};

const deleteBreakdown = async (req, res) => {
  const { id: userId } = req.user;
  const { breakdownId } = req.body;

  await model.deleteBreakdown(userId, breakdownId);

  res.status(200).send('Success');
};

module.exports = { getBreakdowns, addBreakdown, updateBreakdown, deleteBreakdown };
