import api from '@/services/Api';

export default {
  index() {
    return api().get('songs');
  },

  // show() {
  //   return api().get('songs');
  // },
};
