<template>
  <div class='map-wrapper'>
    <div id="my-map" data-test="map-container"/>
    <context-menu />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MapWrapper from '@/lib/map-wrapper'
import ContextMenu from '@/components/context-menu'

export default {
  name: 'MainMap',
  components: {
    'context-menu': ContextMenu
  },
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
.map-wrapper,
#my-map {
  height: 100%;
  width: 100%;
}
</style>
