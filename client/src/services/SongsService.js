import api from '@/services/Api';

export default {
  index() {
    return api().get('songs');
  },

  post(song) {
    return api().post('songs', song);
  },

  // show() {
  //   return api().get('songs');
  // },
};
