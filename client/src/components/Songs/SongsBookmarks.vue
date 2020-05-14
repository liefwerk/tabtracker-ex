<template>
  <v-flex xs6>
    <panel title="Bookmarks">
      <v-data-table
      :headers="headers"
      :sort-by="['title', 'artist']"
      :items="bookmarks">
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
  </v-flex>
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

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
      bookmarks: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index({
        userId: this.user.id
      })).data
    }
  }
}
</script>

<style>

</style>
