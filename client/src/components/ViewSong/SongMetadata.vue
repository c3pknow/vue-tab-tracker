<template>
<panel class="song" title="Song Metadata">
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
          name: 'songs-edit',
          params: {
            songId: song.id,
          }
        })">Edit Song</v-btn>
    </v-flex>
    <v-flex xs6>
      <img class="album-image" :src="song.albumImageURL" alt="">
      <br>
      {{song.album}}
    </v-flex>
  </v-layout>
</panel>
</template>

<script>
export default {
  props: ['song'],
  components: {},
  methods: {
    async navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
  padding-bottom: 10px;
}
.song-genre {
  font-size: 16px;
  padding-bottom: 50px;
}
.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
