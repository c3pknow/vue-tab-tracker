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
        class="red lighten-1" small dark
        :to="{
          name: 'songs-edit',
          params () {
            return {songId: song.id}
          }
        }">Edit</v-btn>

      <v-btn
        v-if="isUserLoggedIn && !bookmark"
        class="red lighten-1" dark small
        @click="setPin">Pin</v-btn>

      <v-btn
        v-if="isUserLoggedIn && bookmark"
        class="red lighten-1" dark small
        @click="removePin">Unpin</v-btn>
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
import { mapState } from 'vuex';
import BookmarksService from '@/services/BookmarksService';

export default {
  props: ['song'],
  data() {
    return {
      bookmark: null,
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
  },
  watch: {
    async song() {
      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        this.bookmark = (await BookmarksService.get({
          songId: this.song.id,
          userId: this.user.id,
        })).data[0];
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  },
  methods: {
    async setPin() {
      try {
        const bookmarks = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.user.id,
        })).data;

        if (bookmarks.length) {
          this.bookmark = bookmarks[0];
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    async removePin() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
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
  padding-bottom: 20px;
}
.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
