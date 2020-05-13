import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import vuetify from '@/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import VueYoutubeEmbed from 'vue-youtube-embed'
import Panel from './components/globals/Panel'

Vue.config.productionTip = false

Vue.use(vuetify)
Vue.use(VueYoutubeEmbed, { global: true })

Vue.component('panel', Panel)

sync(store, router)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
