const express = require('express');

const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(express.static('../client'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.use('/', require('./routes'));

app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Error handler catches server error');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
