<template>
  <div id="app">
    <main-map/>
  </div>
</template>

<script>
import MainMap from './components/main-map.vue'

export default {
  name: 'app',
  components: {
    'main-map': MainMap
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
