<template>
  <v-layout>
    <v-flex xs6 offset-xs3 my-10>
      <panel title="Let's register">
        <form name="tab-tracker-form" autocomplete="off" class="px-4 py-4">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
          <br>
          <div class="danger-alert" v-html="error" />
          <br>
          <v-btn
            class="green lighten-1" dark
            @click="register">
            Register
          </v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
