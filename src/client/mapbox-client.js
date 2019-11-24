import axios from 'axios'
import config from '@/lib/config'

export default class MapboxClient {
  static create () {
    return new MapboxClient(axios)
  }

  constructor (client) {
    this._client = client.create({
      baseURL: config.mapbox.apiURL
    })
  }

  getDirection ({ mode = 'mapbox/walking', lngLatArray }) {
    const directionsEndpoint = `${config.mapbox.directionsEndpoint}/${config.mapbox.apiVersion}`
    const formattedLngLat = lngLatArray.map(lngLat => lngLat.join(',')).join(';')

    return this._client.get(
      `${directionsEndpoint}/${mode}/${formattedLngLat}.json`,
      {
        params: {
          access_token: config.mapbox.accessToken,
          geometries: 'geojson',
          steps: true
        }
      }
    )
  }
}
