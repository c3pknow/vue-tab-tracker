<template>
   <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs" >
      <div v-for="song in songs" :key="song.id">
        {{song.title}} - {{song.artist}} - {{song.album}}<br>
      </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import Panel from '@/components/Panel';
import SongsService from '@/services/SongsService'

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
    this.songs = await SongsService.index();
    console.log(this.songs)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
