<template>
  <v-layout>
    <v-flex xs5>
      <panel title="Song Metadata">
        <v-text-field
              label="Title"
              id="title"
              required
              :rules="[required]"
              v-model="song.title"
              placeholder="song title" ></v-text-field>

          <v-text-field
              label="Artist"
              id="artist"
              required
              :rules="[required]"
              v-model="song.artist"
              placeholder="song artist" ></v-text-field>

          <v-text-field
              label="Album"
              id="album"
              required
              :rules="[required]"
              v-model="song.album"
              placeholder="album" ></v-text-field>

          <v-text-field
              label="Genre"
              id="genre"
              required
              :rules="[required]"
              v-model="song.genre"
              placeholder="genre" ></v-text-field>

          <v-text-field
              label="Album Art"
              id="albumArt"
              required
              :rules="[required]"
              v-model="song.albumImageURL"
              placeholder="URL to ablum image" ></v-text-field>

          <v-text-field
              label="Youtube ID"
              id="youtubeId"
              required
              :rules="[required]"
              v-model="song.youtubeId"
              placeholder="YouTube ID" ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs7>
      <panel title="Song Details" class="ml-4">
          <v-text-field
                textarea
                label="Tab"
                id="tab"
                multi-line
                required
                :rules="[required]"
                v-model="song.tab"
                placeholder="song tablature" ></v-text-field>

          <v-text-field
                textarea
                label="Lyrics"
                id="lyrics"
                required
                multi-line
                :rules="[required]"
                v-model="song.lyrics"
                placeholder="song lyrics" ></v-text-field>
      </panel>
      <div class="danger-alert" v-if="error">{{ error }}</div>
      <v-btn
        class="red lighten-1" dark
        @click="update">Update Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService';

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        album: null,
        albumImageURL: null,
        youtubeId: null,
        genre: null,
        tab: null,
        lyrics: null,
      },
      error: null,
      required: value => !!value || 'Required.',
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data;
  },
  methods: {
    async update() {
      this.error = null;
      const requiredFieldsComplete = Object.keys(this.song).every(key => !!this.song[key]);

      if (!requiredFieldsComplete) {
        this.error = 'Please complete all required fields.';
        return;
      }
      try {
        await SongsService.put(this.song);
        this.$router.push({ name: 'song', params: { songId: this.song.id } });
      } catch (err) {
        // console.log(err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danger-alert {
  color: red;
}
</style>
