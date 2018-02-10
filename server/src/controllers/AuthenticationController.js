const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config/config');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJSON = user.toJSON();
      res.status(200).send({
        user: userJSON,
        token: jwtSignUser(userJSON),
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: 'This email is already in use.' });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(403).send({ error: 'No user found with that login and password.' });
      }
      const isPasswordValid = user.comparePassword(password, user.password);
      if (!isPasswordValid) {
        return res.status(403).send({ error: 'No user found with that login and password.' });
      }
      const userJSON = user.toJSON();
      res.status(200).send({
        user: userJSON,
        token: jwtSignUser(userJSON),
      });
    } catch (error) {
      return res.status(500).send({ error: 'An error occurred trying to log in.' });
    }
  },
};
