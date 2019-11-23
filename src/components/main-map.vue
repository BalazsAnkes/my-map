<template>
  <div id="my-map" data-test="map-container">
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MapWrapper from '@/lib/map-wrapper'

export default {
  name: 'MainMap',
  data () {
    return {
      container: 'my-map'
    }
  },
  computed: {
    ...mapState(['map'])
  },
  mounted () {
    const mapWrapper = MapWrapper.create()
    mapWrapper.init({
      container: 'my-map',
      ...this.map
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
