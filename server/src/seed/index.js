const {
  sequelize, Song, User, Bookmark, History,
} = require('../models');

const Promise = require('bluebird');
const songs = require('./songs.json');
const users = require('./users.json');
const bookmarks = require('./bookmarks.json');
const history = require('./history.json');

// { force: true } to drop and recreate DB from models
const forceSYNC = 1;

sequelize.sync({ force: forceSYNC }).then(async () => {
  await Promise.all(users.map(user => User.create(user)));
  await Promise.all(songs.map(song => Song.create(song)));
  await Promise.all(bookmarks.map(bookmark => Bookmark.create(bookmark)));
  await Promise.all(history.map(item => History.create(item)));
});
