import mapboxgl from 'mapbox-gl'

export default class MarkerWrapper {
  static create (markerOptions) {
    const marker = new mapboxgl.Marker(markerOptions)
    return new MarkerWrapper(marker)
  }

  constructor (marker) {
    this._marker = marker
  }

  setLngLat ({ lng, lat }) {
    this._marker.setLngLat([lng, lat])
    return this
  }

  addTo (map) {
    this._marker.addTo(map)
    return this
  }

  remove () {
    this._marker.remove()
  }

  getLngLat () {
    return this._marker.getLngLat()
  }
}
