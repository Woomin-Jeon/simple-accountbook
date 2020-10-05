const express = require('express');

const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(express.static('../client'));

app.use('/', require('./routes'));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('[Error Handler]', err);
  res.status(500).send('Error handler catches server error');
});

module.exports = app;
