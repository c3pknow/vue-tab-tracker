const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SongsController = require('./controllers/SongsController');
const BookmarksController = require('./controllers/BookmarksController');
const HistoryController = require('./controllers/HistoryController');
const isAuthenticated = require('./policies/IsAuthenticated');

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

  app
    .get('/bookmarks', isAuthenticated, BookmarksController.get)
    .post('/bookmarks', isAuthenticated, BookmarksController.post)
    .delete('/bookmarks/:bookmarkId', isAuthenticated, BookmarksController.delete);

  app
    .get('/history', isAuthenticated, HistoryController.index)
    .post('/history', isAuthenticated, HistoryController.post);
};
