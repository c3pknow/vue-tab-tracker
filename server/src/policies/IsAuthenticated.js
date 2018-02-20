const passport = require('passport');

module.exports = (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  passport.authenticate('jwt', (err, user) => {
    if (err || !user) {
      res.status(403).send({
        error: 'Unauthorized Access Requested',
      });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
};
