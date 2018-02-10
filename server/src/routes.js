const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
  app
    .post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
    .post('/login', AuthenticationController.login)
    .get('/status', (req, res) => {
      res.send({ message: 'Ping' });
    });
};
