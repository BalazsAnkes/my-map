import mapboxgl from 'mapbox-gl'
import config from '@/lib/config'

export default class MapWrapper {
  static create () {
    return new MapWrapper(mapboxgl)
  }

  constructor (mapTool) {
    if (!MapWrapper._instance) {
      this._mapTool = mapTool
      MapWrapper._instance = this
    }

    return MapWrapper._instance
  }

  initMap (options) {
    this._mapTool.accessToken = config.mapbox.accessToken
    return new this._mapTool.Map(options)
  }
}
