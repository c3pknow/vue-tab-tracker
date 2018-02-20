<template>
  <panel title="Search">
    <v-text-field
      label="Search by song title, artist, album, or genre"
      id="search"
      v-model="search" ></v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      search: '',
    };
  },
  watch: {
    // eslint-disable-next-line func-names
    search: _.debounce(async function () {
      const route = {
        name: 'songs',
      };
      if (this.search !== '') {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>

<style>

</style>
