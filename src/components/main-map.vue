<template>
  <div id="my-map">

  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  name: 'MainMap',
  data () {
    return {
      map: null
    }
  },
  props: {
    msg: String
  },
  mounted () {
    mapboxgl.accessToken = ''

    this.map = new mapboxgl.Map({
      container: 'my-map',
      style: 'mapbox://styles/mapbox/streets-v9'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#my-map {
  height: 400px;
  width: 400px;
}
</style>
