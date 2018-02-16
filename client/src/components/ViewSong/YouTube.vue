<template>
<panel class="song" title="Youtube Video">
  <v-layout>
    <v-flex xs6>
      <youtube
        :video-id="youtubeId"
        player-width="500"
        player-height="200"></youtube>
    </v-flex>
  </v-layout>
</panel>
</template>

<script>
import YouTubeEmbed from 'vue-youtube-embed';

export default {
  props: ['youtubeId'],
  components: {
    YouTubeEmbed,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  height: 330px;
  overflow: hidden;
}
</style>
