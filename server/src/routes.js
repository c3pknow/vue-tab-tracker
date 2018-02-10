const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app) => {
  app.post('/register', AuthenticationController.register);

  app.get('/status', (req, res) => {
    res.send({ message: 'Ping' });
  });
};
