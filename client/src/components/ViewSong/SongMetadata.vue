<template>
  <v-flex xs6>
    <panel title="Song Metadata">
      <v-btn v-if="isUserLoggedIn" slot="action" class="blue-grey lighten-5 elevation-2" light small
        router :to="{
          name: 'song-edit',
          params () {
            return {
              songId: song.id
            }
          }
      }">
        <v-icon class="mr-2">edit</v-icon>
        Edit
      </v-btn>
      <v-btn v-if="isUserLoggedIn && !bookmark" slot="action" class="blue-grey lighten-5 elevation-2 ml-2" light small @click="setAsBookmark">
        <v-icon class="mr-2">bookmark</v-icon>
        Bookmark
      </v-btn>
      <v-btn v-if="isUserLoggedIn && bookmark" slot="action" class="blue-grey lighten-5 elevation-2 ml-2" light small @click="unsetAsBookmark">
        <v-icon class="mr-2">bookmark_border</v-icon>
        Unbookmark
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
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return 'not logged in'
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        console.log('bookmarké')
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        console.log('débookmarké')
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
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
