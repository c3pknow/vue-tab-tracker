import api from '@/services/Api';

export default {
  index(params) {
    return api().get('history', {
      params,
    });
  },
  post(history) {
    return api().post('history', history);
  },
};
