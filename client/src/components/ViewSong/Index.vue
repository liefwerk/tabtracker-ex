<template>
  <div>
    <v-layout class="container my-10">
      <song-metadata :song="song"></song-metadata>
      <youtube :song="song"></youtube>
    </v-layout>
    <v-layout my-10 mx-10>
      <tabs :song="song"></tabs>
      <lyrics :song="song"></lyrics>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import Youtube from './Youtube'
import Tabs from './Tabs'
import Lyrics from './Lyrics'

export default {
  components: {
    SongMetadata,
    Youtube,
    Tabs,
    Lyrics
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>

</style>
