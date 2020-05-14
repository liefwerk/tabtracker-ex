import Api from '@/services/Api'

export default {
  index (bookmarks) {
    return Api().get('bookmarks', {
      params: bookmarks
    })
  },
  post (bookmarks) {
    return Api().post('bookmarks', {
      params: bookmarks
    })
  },
  delete (bookmarksId) {
    return Api().delete(`bookmarks/${bookmarksId}`)
  }
}
