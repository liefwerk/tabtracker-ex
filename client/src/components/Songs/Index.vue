<template>
  <v-layout class="my-6">
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks class="mx-2 my-4" />
      <recently-viewed-songs class="mx-2 my-4" />
    </v-flex>
    <v-flex :class="{
      xs12: !isUserLoggedIn,
      xs6: isUserLoggedIn
    }">
      <songs-search-panel class="mx-2 my-4" />
      <songs-panel class="mx-2 my-4" />
    </v-flex>
  </v-layout>
</template>

<script>
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import SongsPanel from './SongsPanel'
import { mapState } from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  }
}
</script>

<style scoped>
</style>
