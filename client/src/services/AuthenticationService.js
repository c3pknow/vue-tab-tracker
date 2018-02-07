import api from '@/services/Api';

export default {
  register(credentials) {
    return api().post('register', credentials);
  },
};
