<template>
  <div class="white elevation-2 text-center">
    <v-toolbar flat dense class="green lighten-1" dark>
      <v-layout>
        <v-flex class="text-left">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-flex>
        <v-flex class="text-right">
          <slot name="action"></slot>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <div>
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: [
    'title'
  ]
}
</script>

<style>

</style>
