import api from '@/services/Api';

export default {
  index(search) {
    return api().get('songs', {
      params: {
        search,
      },
    });
  },

  show(songId) {
    return api().get(`songs/${songId}`);
  },

  post(song) {
    return api().post('songs', song);
  },

  put(song) {
    return api().put(`songs/${song.id}`, song);
  },
};
