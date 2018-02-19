// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import store from '@/store';
import { sync } from 'vuex-router-sync';
import YouTubeEmbed from 'vue-youtube-embed';
import 'vuetify/dist/vuetify.min.css';
import Panel from '@/components/globals/Panel';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(YouTubeEmbed);
Vue.component('panel', Panel);

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
});
