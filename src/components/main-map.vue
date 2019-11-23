<template>
  <div id="my-map" data-test="map-container">
  </div>
</template>

<script>
import MapWrapper from '@/lib/map-wrapper'

export default {
  name: 'MainMap',
  data () {
    return {
      container: 'my-map'
    }
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
