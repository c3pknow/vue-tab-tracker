const { History, Song } = require('../models');
const _ = require('lodash');

module.exports = {
  async index(req, res) {
    try {
      const { userId } = req.query;
      const history = await History.findAll({
        where: {
          UserId: userId,
        },
        include: [{ model: Song }],
      })
        .map(record => record.toJSON())
        .map(record => _.extend({}, record.Song, record));
      res.send(history || false);
    } catch (error) {
      res.status(500).send({
        error: 'An error occurred fetching history.',
      });
    }
  },
  async post(req, res) {
    try {
      const { songId, userId } = req.body;

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
