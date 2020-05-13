<template>
  <v-layout class="container my-10 text-center">
    <v-flex xs4>
      <panel title="Song Metadata">
        <div class="px-4 py-4">
          <v-text-field required :rules="[required]" label="title" v-model="song.title"></v-text-field>
          <v-text-field required :rules="[required]" label="artist" v-model="song.artist"></v-text-field>
          <v-text-field required :rules="[required]" label="genre" v-model="song.genre"></v-text-field>
          <v-text-field required :rules="[required]" label="album" v-model="song.album"></v-text-field>
          <v-text-field required :rules="[required]" label="albumImage" v-model="song.albumImage"></v-text-field>
          <v-text-field required :rules="[required]" label="youtubeId" v-model="song.youtubeId"></v-text-field>
        </div>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <div class="px-4 py-4">
          <v-textarea required :rules="[required]" name="tab" label="tab" value="tab" hint="Enter the tabs of that song" v-model="song.tab"></v-textarea>
          <v-textarea required :rules="[required]" name="lyrics" label="lyrics" value="lyrics" hint="Enter the lyrics of that song" v-model="song.lyrics"></v-textarea>
        </div>
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn dark class="green lighten-2 my-5" @click="createSong">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {},
      required: (value) => !!value || 'Required.',
      error: null
    }
  },
  methods: {
    createSong: async function () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }

      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>
