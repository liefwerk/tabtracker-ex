<template>
  <v-toolbar dark class="green lighten-1">
    <v-toolbar-title class="mr-4">
        <router-link class="a-link" to="root">TabTracker</router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text dark>
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn text dark router to="login">Login</v-btn>
      <v-btn text dark router to="register">Signup</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped>
.a-link{
  text-decoration: none;
  color: white;
}
</style>
