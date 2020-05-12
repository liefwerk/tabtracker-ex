<template>
  <div class="white elevation-2 text-center">
    <v-toolbar flat dense class="green lighten-1" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action"></slot>
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
  props: [
    'title'
  ]
}
</script>

<style>

</style>
