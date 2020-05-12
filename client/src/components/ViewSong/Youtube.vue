<template>
  <v-flex xs6 class="ml-2">
    <panel title="Youtube">
      <youtube :video-id="song.youtubeId" :player-width="500" :player-height="200">
      </youtube>
    <p>{{youtubeId}}</p>
    </panel>
  </v-flex>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'song'
  ]
}
</script>

<style scoped>
</style>
