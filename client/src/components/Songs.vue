<template>
  <v-layout>
    <v-flex xs6 offset-xs3 my-10>
      <panel title="Songs">
        <v-btn slot="action" class="blue-grey lighten-5 elevation-2" fab light small absolute right middle router to="/songs-create">
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id" class="song">

          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn dark class="green lighten-2 my-5" :to="{ name: 'song', params: { id: song.id }}">View</v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImage" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 25px;
}

.song-genre {
  font-size: 18px;
}

</style>
