<template>
<v-flex xs6>
  <panel class="" title="Tabs">
    <pre class="tabs my-5">{{song.tab}}</pre>
  </panel>
</v-flex>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
.tabs {
  overflow: auto;
  height: 700px;
  font-size: .7em;
}
</style>
