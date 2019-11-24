<template>
  <div class='map-wrapper'>
    <div id="my-map" data-test="map-container"/>
    <context-menu
      @marked="handleMarked"
      :style='{"display": (isContextMenuVisible ? "block": "none"), "top": y, "left": x}'
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MapWrapper from '@/lib/map-wrapper'
import MarkerWrapper from '@/lib/marker-wrapper'
import ContextMenu from '@/components/context-menu'

export default {
  name: 'MainMap',
  components: {
    'context-menu': ContextMenu
  },
  data () {
    return {
      isContextMenuVisible: false,
      mapbox: null,
      mapEvent: null,
      x: 0,
      y: 0
    }
  },
  computed: {
    ...mapState(['mapOptions', 'fromMarker', 'toMarker'])
  },
  mounted () {
    const mapWrapper = MapWrapper.create()
    this.mapbox = mapWrapper.initMap({
      container: 'my-map',
      ...this.mapOptions
    })
    this.mapbox.on('contextmenu', this.handleContextMenu)
    this.mapbox.on('click', this.handleClick)
  },
  methods: {
    handleClick (event) {
      this.isContextMenuVisible = false
      this.fromMarker.remove()
      this.setFromMarker(MarkerWrapper.create())
      this.fromMarker.setLngLat(event.lngLat).addTo(this.mapbox)
    },
    handleContextMenu (event) {
      this.isContextMenuVisible = true
      this.mapEvent = event
      this.x = `${event.originalEvent.pageX}px`
      this.y = `${event.originalEvent.pageY}px`
    },
    handleMarked () {
      this.isContextMenuVisible = false
      this.toMarker.remove()
      this.setToMarker(MarkerWrapper.create())
      this.toMarker.setLngLat(this.mapEvent.lngLat).addTo(this.mapbox)
    },
    ...mapMutations(['setFromMarker', 'setToMarker'])
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
