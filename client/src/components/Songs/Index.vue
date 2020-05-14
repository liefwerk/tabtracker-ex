<template>
  <div>
    <v-layout class="my-2">
      <songs-search-panel class="mx-2" />
    </v-layout>
    <v-layout class="my-2">
      <songs-bookmarks class="mx-2" />
      <songs-panel class="mx-2" />
    </v-layout>
    <v-layout>
    </v-layout>
  </div>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
  }
}
</script>

<style scoped>
</style>
