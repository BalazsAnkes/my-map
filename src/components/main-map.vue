<template>
  <div class='map-wrapper'>
    <div id="my-map" data-test="map-container"/>
    <context-menu
      @marked="handleMarked"
      :style='{"display": (isContextMenuVisible ? "block": "none"), "top": y, "left": x}'
    />
    <travel-guide
      :travelData="travelData"
      :style='{"display": (isTravelGuideVisible ? "block": "none")}'
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MapWrapper from '@/lib/map-wrapper'
import MarkerWrapper from '@/lib/marker-wrapper'
import ContextMenu from '@/components/context-menu'
import TravelGuide from '@/components/travel-guide'
import MapboxClient from '@/client/mapbox-client'

export default {
  name: 'MainMap',
  components: {
    'context-menu': ContextMenu,
    'travel-guide': TravelGuide
  },
  data () {
    return {
      isContextMenuVisible: false,
      isTravelGuideVisible: false,
      travelData: {},
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

      const client = MapboxClient.create()
      const lngLatArray = [this.fromMarker.getLngLat().toArray(), this.toMarker.getLngLat().toArray()]
      client.getDirection({ lngLatArray }).then((response) => {
        this._paintDirection(response.data.routes[0].geometry)
        this.travelData = response.data.routes[0]
        this.isTravelGuideVisible = true
      })
    },
    _paintDirection (geometry) {
      this.mapbox.addLayer({
        'id': 'route',
        'type': 'line',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': geometry
          }
        },
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#3b9ddd',
          'line-width': 8,
          'line-opacity': 0.8
        }
      })
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
