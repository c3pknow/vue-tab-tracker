import api from '@/services/Api';

export default {
  get(bookmark) {
    return api().get('bookmarks', {
      params: bookmark,
    });
  },
  post(bookmark) {
    return api().post('bookmarks', {
      songId: bookmark.songId,
      userId: bookmark.userId,
    });
  },
  delete(bookmarkId) {
    return api().delete(`bookmarks/${bookmarkId}`);
  },
};
