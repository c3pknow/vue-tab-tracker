<template>
   <v-layout >
    <v-flex xs4 v-if="this.isUserLoggedIn">
      <song-bookmarks />
      <song-history class="mt-3" />
    </v-flex>
    <v-flex :class="{
                xs12: !isUserLoggedIn,
                xs8: isUserLoggedIn,
                    }"  class="ml-3">
      <song-search-panel />
      <songs-panel class="mt-3" />
    </v-flex>
  </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService';
import SongsPanel from './SongsPanel';
import SongSearchPanel from './SongSearchPanel';
import SongBookmarks from './SongBookmarks';
import SongHistory from './SongHistory';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      songs: null,
    };
  },
  components: {
    SongSearchPanel,
    SongsPanel,
    SongBookmarks,
    SongHistory,
  },
  async mounted() {
    this.songs = (await SongsService.index()).data;
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
  
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
