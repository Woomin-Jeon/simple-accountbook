const passport = require('passport');
const passportJWT = require('passport-jwt');
const passportLocal = require('passport-local');

const { checkPassword } = require('../models/auth');

const JWTStrategy = passportJWT.Strategy;
const LocalStrategy = passportLocal.Strategy;

require('dotenv').config();

const options = {
  local: {
    usernameField: 'id',
    passwordField: 'pw',
  },
  jwt: {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  },
};

passport.use(new LocalStrategy(options.local, async (id, pw, done) => {
  const user = await checkPassword(id, pw);

  done(null, user);
}));

passport.use(new JWTStrategy(options.jwt, async (jwtPayload, done) => {
  const { id, pw } = jwtPayload;
  const user = await checkPassword(id, pw);

  done(null, user);
}));

module.exports = passport;
