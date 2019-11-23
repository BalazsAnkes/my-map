<template>
  <div class='map-wrapper'>
    <div id="my-map" data-test="map-container"/>
    <context-menu :style='{"display": (isContextMenuVisible ? "block": "none"), "top": y, "left": x}' />
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
      isContextMenuVisible: false,
      x: 0,
      y: 0
    }
  },
  computed: {
    ...mapState(['map'])
  },
  mounted () {
    const mapWrapper = MapWrapper.create()
    const mapbox = mapWrapper.init({
      container: 'my-map',
      ...this.map
    })
    mapbox.on('contextmenu', this.handleContextMenu)
    mapbox.on('click', this.handleClick)
  },
  methods: {
    handleClick (event) {
      this.isContextMenuVisible = false
    },
    handleContextMenu (event) {
      this.isContextMenuVisible = true
      this.x = `${event.originalEvent.pageX}px`
      this.y = `${event.originalEvent.pageY}px`
    }
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
