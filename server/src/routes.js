const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SongsController = require('./controllers/SongsController');

module.exports = (app) => {
  app
    .post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
    .post('/login', AuthenticationController.login)
    .get('/songs', SongsController.index)
    .post('/songs', SongsController.post)
    .get('/status', (req, res) => {
      res.send({ message: 'Ping' });
    });
};
