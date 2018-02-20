<template>
  <panel title="Recently Viewed">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="songs">
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
import SongHistoryService from '@/services/SongHistoryService';

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
      songs: [],
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
      this.songs = (await SongHistoryService.index({
        userId: this.user.id,
      })).data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
};
</script>

<style>

</style>
