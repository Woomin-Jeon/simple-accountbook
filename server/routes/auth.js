const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken');

const passport = require('../utils/passport');

router.post('/', (req, res) => {
  passport.authenticate('local', { session: false }, (error, matchedUser) => {
    if (!matchedUser) {
      res.status(401).json({ message: 'Fail' });
      return;
    }

    req.login(matchedUser, { session: false }, () => {
      const token = jwt.sign(matchedUser, process.env.JWT_SECRET);
      res.status(200).json({ message: 'Success', token });
    });
  })(req, res);
});

module.exports = router;