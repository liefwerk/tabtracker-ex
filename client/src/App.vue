<template>
  <div id="app">
    <v-app>
      <main>
        <page-header></page-header>
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
.danger-alert {
  color: red;
}
</style>
