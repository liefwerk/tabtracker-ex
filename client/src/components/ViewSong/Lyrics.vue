<template>
  <v-flex xs6 class="ml-4">
    <panel title="Lyrics">
      <pre class="lyrics my-5">{{song.lyrics}}</pre>
    </panel>
  </v-flex>
</template>

<script>

export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
.tabs {
  overflow: auto;
  height: 700px;
  font-size: .7em;
}

.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
</style>
