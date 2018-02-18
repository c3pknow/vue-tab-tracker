import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Songs from '@/components/Songs/Index';
import ViewSong from '@/components/ViewSong/Index';
import CreateSong from '@/components/CreateSong';
import EditSong from '@/components/EditSong';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs,
    },
    {
      path: '/song/:songId',
      name: 'song',
      component: ViewSong,
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong,
    },
    {
      path: '/songs/edit/:songId',
      name: 'songs-edit',
      component: EditSong,
    },
    {
      path: '*',
      redirect: 'songs',
    },
  ],
});
