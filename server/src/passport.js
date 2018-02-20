const passport = require('passport');
const config = require('./config/config');
const { User } = require('./models');

const JwtStrategy = require('passport-jwt').Strategy;
const { fromAuthHeaderAsBearerToken } = require('passport-jwt').ExtractJwt;

passport.use(new JwtStrategy(
  {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret,
  },
  async (jwtPayload, done) => {
    try {
      const user = await User.findOne({
        where: {
          id: jwtPayload.id,
        },
      });

      if (!user) {
        return done(new Error(), false);
      }
      return done(null, user);
    } catch (error) {
      return done(new Error(), false);
    }
  },
));

module.exports = null;
