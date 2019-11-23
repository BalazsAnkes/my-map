<template>
  <div id="my-map">
  </div>
</template>

<script>
import MapWrapper from '../lib/map-wrapper'

export default {
  name: 'MainMap',
  props: {
    msg: String
  },
  mounted () {
    const mapWrapper = MapWrapper.create()
    mapWrapper.init({
      container: 'my-map',
      style: 'mapbox://styles/mapbox/streets-v9'
    })
  }
}
</script>

<style scoped>
#my-map {
  height: 100%;
  width: 100%;
}
</style>
