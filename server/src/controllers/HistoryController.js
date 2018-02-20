const { History, Song } = require('../models');
const _ = require('lodash');

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id;
      const history = await History.findAll({
        where: {
          UserId: userId,
        },
        include: [{ model: Song }],
      })
        .map(record => record.toJSON())
        .map(record => _.extend({}, record.Song, record));
      console.log(history.length);
      const uniqueHistory = _.uniqBy(history, song => song.SongId);
      console.log('uniqueHistory: ', uniqueHistory.length);
      res.send(uniqueHistory || false);
    } catch (error) {
      res.status(500).send({
        error: 'An error occurred fetching history.',
      });
    }
  },
  async post(req, res) {
    try {
      const { songId } = req.body;
      const userId = req.user.id;
      const record = await History.create({
        SongId: songId,
        UserId: userId,
      });
      return res.send(record);
    } catch (error) {
      return res.status(500).send({
        error: 'An error occurred adding to history.',
      });
    }
  },
};
