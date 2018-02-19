const { Bookmark } = require('../models');

module.exports = {
  async get(req, res) {
    try {
      const { songId, userId } = req.query;
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId,
        },
      });
      res.send(bookmark || false);
    } catch (error) {
      res.status(500).send({
        error: 'An error occurred fetching bookmark.',
      });
    }
  },
  async post(req, res) {
    try {
      const { songId, userId } = req.body;
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
  async delete(req, res) {
    try {
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findById(bookmarkId);
      await bookmark.destroy();
      res.send(bookmark);
    } catch (error) {
      res.status(500).send({
        error: 'An error occurred deleting a bookmark.',
      });
    }
  },
};
