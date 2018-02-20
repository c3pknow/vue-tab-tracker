<template>
  <panel title="Pins">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
            {{ props.item.title }}
        </td>
       <td class="text-xs-right">
           {{ props.item.artist }}
        </td>
      </template>
    </v-data-table>

  </panel>
</template>

<script>
import { mapState } from 'vuex';
import BookmarksService from '@/services/BookmarksService';

export default {
  data() {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Artist',
          value: 'artist',
        },
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true,
      },
      bookmarks: [],
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
  },
  async mounted() {
    try {
      if (!this.isUserLoggedIn) {
        return;
      }
      this.bookmarks = (await BookmarksService.get()).data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
};
</script>

<style>

</style>
