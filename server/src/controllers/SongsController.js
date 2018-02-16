const { Song } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      let songs = null;
      const search = req.query.search;
      console.log(search);
      if (search) {
        songs = await Song.findAll({
          where: {
            $or: ['title', 'artist', 'genre', 'album'].map(key => ({
              [key]: {
                $like: `%${search}%`,
              },
            })),
          },
        });
      } else {
        songs = await Song.findAll({
          limit: 10,
        });
      }
      res.send(songs);
    } catch (error) {
      res.status(500).send({
        error: 'An error occurred fetching songs index.',
      });
    }
  },
  async show(req, res) {
    try {
      const song = await Song.findById(req.params.songId);
      res.send(song);
    } catch (error) {
      res.status(500).send({
        error: 'An error occurred fetching a song.',
      });
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (error) {
      res.status(500).send({
        error: 'An error occurred creating song.',
      });
    }
  },
  async put(req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId,
        },
      });
      res.send(song);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: 'An error occurred updating song.',
      });
    }
  },
};
