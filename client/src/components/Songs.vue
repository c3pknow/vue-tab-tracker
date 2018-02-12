<template>
   <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs" >        
        <v-btn
            @ click="navigateTo({name: 'songs-create'})"
            slot="action"
            fab
            class="white accent-1"
            light
            small
            absolute
            right
            middle >
          <v-icon>add</v-icon>
        </v-btn>
      <div v-for="song in songs" :key="song.id" class="song">

        <v-layout>
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>
              <v-btn
                class="deep-purple" dark
                @click="navigateTo({
                    name: 'song',
                    params: {songId: song.id}})">
                  View Song
              </v-btn>
          </v-flex>
        
          <v-flex xs6>
            <img :src="song.albumImageURL" class="album-image"/>
          </v-flex>
        </v-layout>

      </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import Panel from '@/components/Panel';
import SongsService from '@/services/SongsService';

export default {
  data() {
    return {
      songs: null,
    };
  },
  components: {
    Panel,
  },
  async mounted() {
    this.songs = (await SongsService.index()).data;
    console.log(this.songs);
  },
  methods: {
     navigateTo(route) {
      this.$router.push(route);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song{
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
