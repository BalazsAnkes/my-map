import MapWrapper from './map-wrapper'

describe('MapWrapper', () => {
  let mapToolMock

  beforeEach(() => {
    delete MapWrapper._instance
    mapToolMock = {}
  })

  it('creates a MapWrapper instance', () => {
    const instance = new MapWrapper(mapToolMock)
    expect(instance).to.be.instanceof(MapWrapper)
  })

  it('is a singleton', () => {
    const instance = new MapWrapper(mapToolMock)
    const instance2 = new MapWrapper(mapToolMock)

    expect(instance).to.eql(instance2)
  })

  describe('init', () => {
    class FakeMap {
      constructor (options) {
        this._options = options
      }
    }

    const setupMock = () => {
      return {
        Map: FakeMap
      }
    }

    beforeEach(function () {
      mapToolMock = setupMock()
    })

    it('initializes the map', () => {
      const options = {}
      const mapWrapper = new MapWrapper(mapToolMock)
      const initObject = mapWrapper.init(options)

      expect(mapToolMock).to.have.property('accessToken')
      expect(initObject).to.be.instanceof(FakeMap)
    })
  })
})
