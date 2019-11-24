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

  describe('remove', () => {
    it('should remove the marker from map', () => {
      const fakeMarker = {
        remove: sinon.stub()
      }
      const markerWrapper = new MarkerWrapper(fakeMarker)

      markerWrapper.remove()

      expect(fakeMarker.remove).to.have.been.called
    })
  })

  describe('getLngLat', () => {
    it('should get the longitude and latitude of the marker', () => {
      const fakeMarker = {
        getLngLat: sinon.stub()
      }
      const markerWrapper = new MarkerWrapper(fakeMarker)

      markerWrapper.getLngLat()

      expect(fakeMarker.getLngLat).to.have.been.called
    })
  })
})
