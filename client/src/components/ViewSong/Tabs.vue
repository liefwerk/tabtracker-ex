<template>
<v-flex xs6>
  <panel class="" title="Tabs">
    <pre class="tabs my-5">
      {{song.tab}}
    </pre>
  </panel>
</v-flex>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
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

.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
</style>
