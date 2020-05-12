<template>
  <v-flex xs6 >
    <panel title="Song Metadata">
      <v-btn slot="action" class="blue-grey lighten-5 elevation-2" light small absolute right middle router :to="{ name: 'song-edit', params: { songId: song.id }}">
          <v-icon>edit</v-icon>
        </v-btn>
      <v-layout class="px-5 py-5">
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
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImage" />
        <br>
          {{song.album}}
        </v-flex>
      </v-layout>
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
