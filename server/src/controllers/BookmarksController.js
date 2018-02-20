const { Bookmark, Song } = require('../models');
const _ = require('lodash');

module.exports = {
  async get(req, res) {
    try {
      const userId = req.user.id;
      const { songId } = req.query;
      const where = {
        UserId: userId,
      };
      if (songId) {
        where.SongId = songId;
      }
      const bookmarks = await Bookmark.findAll({
        where,
        include: [
          {
            model: Song,
          },
        ],
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({}, bookmark.Song, bookmark));
      res.send(bookmarks || false);
    } catch (error) {
      res.status(500).send({
        error: 'An error occurred fetching bookmark.',
      });
    }
  },
  async post(req, res) {
    try {
      const userId = req.user.id;
      const { songId } = req.body;
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId,
        },
      });

      if (bookmark) {
        return res.status(400).send({
          error: 'Bookmark already exists for this user and song.',
        });
      }

      const savedBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId,
      });
      return res.send(savedBookmark);
    } catch (error) {
      return res.status(500).send({
        error: 'An error occurred adding a bookmark.',
      });
    }
  },
  // eslint-disable-next-line consistent-return
  async delete(req, res) {
    try {
      const userId = req.user.id;
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId,
        },
      });
      if (!bookmark) {
        return res.status(403).send({
          error: 'Unauthorized access requested deleting a bookmark',
        });
      }
      await bookmark.destroy();
      return res.send(bookmark);
    } catch (error) {
      res.status(500).send({
        error: 'An error occurred deleting a bookmark.',
      });
    }
  },
};
