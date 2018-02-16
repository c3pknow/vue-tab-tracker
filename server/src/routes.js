const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SongsController = require('./controllers/SongsController');

module.exports = (app) => {
  app
    .post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
    .post('/login', AuthenticationController.login)
    .get('/status', (req, res) => {
      res.send({ message: 'Ping' });
    });

  app
    .get('/songs', SongsController.index)
    .get('/songs/:songId', SongsController.show)
    .put('/songs/:songId', SongsController.put)
    .post('/songs', SongsController.post);
};
