<template>
  <div>
    <v-layout class="container my-10">
      <song-metadata :song="song"></song-metadata>
      <youtube :youtubeId="song.youtubeId"></youtube>
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
import SongsHistoryService from '@/services/SongsHistoryService'
import { mapState } from 'vuex'

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
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data
    if (this.isUserLoggedIn) {
      SongsHistoryService.post({
        songId: songId
      })
    }
  }
}
</script>

<style scoped>

</style>
