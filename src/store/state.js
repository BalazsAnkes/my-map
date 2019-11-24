import config from '@/lib/config'

const markerInterface = {
  remove () {}
}

export default {
  mapOptions: config.map,
  fromMarker: markerInterface,
  toMarker: markerInterface
}
