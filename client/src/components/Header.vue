<template>
  <v-toolbar dark class="green lighten-1">
    <v-toolbar-title class="mr-4">
        <router-link class="a-link" to="/">TabTracker</router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text dark router to="/songs">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" text dark router to="/login">Login</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" text dark router to="/register">Signup</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" @click="logout" text dark >Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.a-link{
  text-decoration: none;
  color: white;
}
</style>
