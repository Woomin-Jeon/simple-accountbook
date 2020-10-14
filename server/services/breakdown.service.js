const { getRandomString } = require('../utils/generator');

const model = require('../models/breakdown');

const getBreakdowns = async (req, res) => {
  const { id: userId } = req.user;

  try {
    const breakdowns = await model.getBreakdowns(userId);
    res.status(200).json({ breakdowns });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const addBreakdown = async (req, res) => {
  const { amount, content, method, come, categoryId, date } = req.body;
  const { id: userId } = req.user;
  const id = getRandomString();

  const parameters = {
    id, amount, content, method, come, date, userId, categoryId,
  };

  try {
    await model.addBreakdown(parameters);
    res.status(200).json({ breakdownId: id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const updateBreakdown = async (req, res) => {
  const { id: userId } = req.user;
  const {
    breakdownId, amount, content, method, come, date, categoryId,
  } = req.body;

  const parameters = {
    breakdownId, amount, content, method, come, date, userId, categoryId,
  };

  try {
    await model.updateBreakdown(parameters);
    res.status(200).send('Success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const deleteBreakdown = async (req, res) => {
  const { id: userId } = req.user;
  const { breakdownId } = req.params;

  try {
    await model.deleteBreakdown(userId, breakdownId);
    res.status(200).send('Success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const getBreakdownsByMonth = async (req, res) => {
  const { id: userId } = req.user;
  const { month } = req.params;

  try {
    const breakdowns = await model.getBreakdownsByMonth(userId, month);
    res.status(200).json({ breakdowns });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getBreakdowns, addBreakdown, updateBreakdown, deleteBreakdown, getBreakdownsByMonth,
};
