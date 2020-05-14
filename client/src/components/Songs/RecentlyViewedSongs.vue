<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
    :headers="headers"
    :sort-by="['title', 'artist']"
    :items="histories">
      <template slot="items" scope="props">
        <td class="text-xs-right">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import SongsHistoryService from '@/services/SongsHistoryService'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      histories: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.histories = (await SongsHistoryService.index()).data
    }
  }
}
</script>

<style>

</style>
