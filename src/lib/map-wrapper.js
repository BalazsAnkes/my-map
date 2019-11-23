import mapboxgl from 'mapbox-gl'

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

  init (options) {
    this._mapTool.accessToken = ''
    return new this._mapTool.Map(options)
  }
}
