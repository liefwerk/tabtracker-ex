<template>
  <div>
    <v-layout class="mb-2">
      <songs-search-panel></songs-search-panel>
    </v-layout>
    <v-layout>
      <songs-panel></songs-panel>
    </v-layout>
  </div>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  }
}
</script>

<style scoped>
</style>
