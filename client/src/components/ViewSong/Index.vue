<template>
  <div>
    <v-layout>
      <v-flex xs6 class="mr-2">
        <song-metadata :song="song"></song-metadata>
      </v-flex>
        <v-flex xs6>
         <you-tube :youtubeId="song.youtubeId"></you-tube>
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6 class="mr-2">
        <tab :tab="song.tab"></tab>
      </v-flex>
      <v-flex xs6>
        <lyrics :lyrics="song.lyrics"></lyrics>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService';
import SongMetadata from './SongMetadata';
import YouTube from './YouTube';
import Lyrics from './Lyrics';
import Tab from './Tab';

export default {
  data() {
    return {
      song: {},
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data;
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
