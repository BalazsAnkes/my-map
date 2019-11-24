import MarkerWrapper from './marker-wrapper'

describe('MarkerWrapper', () => {
  it('creates a MarkerWrapper instance', () => {
    const marker = {}
    const markerWrapper = new MarkerWrapper(marker)

    expect(markerWrapper).to.be.instanceof(MarkerWrapper)
  })

  describe('setLngLat', () => {
    it('should set the longitude and latitude for the marker', () => {
      const fakeMarker = {
        setLngLat: sinon.stub()
      }
      const markerWrapper = new MarkerWrapper(fakeMarker)

      markerWrapper.setLngLat({ lng: 12, lat: 23 })

      expect(fakeMarker.setLngLat).to.have.been.calledWith([12, 23])
    })
  })

  describe('addTo', () => {
    it('should add a marker to the given map', () => {
      const fakeMarker = {
        addTo: sinon.stub()
      }
      const fakeMap = sinon.stub()
      const markerWrapper = new MarkerWrapper(fakeMarker)

      markerWrapper.addTo(fakeMap)

      expect(fakeMarker.addTo).to.have.been.calledWith(fakeMap)
    })
  })
})
