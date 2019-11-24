import { shallowMount } from '@vue/test-utils'
import MainMap from './main-map.vue'
import MapWrapper from '@/lib/map-wrapper'
import MarkerWrapper from '@/lib/marker-wrapper'
import MapboxClient from '@/client/mapbox-client'
import createFakeStore from '../../tests/unit/helper'

describe('MainMap.vue', () => {
  let mapWrapperStub = sinon.stub(MapWrapper, 'create')
  let markerWrapperStub = sinon.stub(MarkerWrapper, 'create')
  let mapboxClientStub = sinon.stub(MapboxClient, 'create')
  let setLngLatStub
  let addToStub
  let removeStub
  let getLngLatStub
  let store
  const stateObj = {
    mapOptions: {},
    fromMarker: { remove () {} },
    toMarker: { remove () {} }
  }

  const init = (state = stateObj) => {
    setLngLatStub = sinon.stub().returnsThis()
    addToStub = sinon.stub()
    removeStub = sinon.stub()
    getLngLatStub = sinon.stub().returns({ toArray: sinon.stub() })
    mapWrapperStub.returns({
      initMap: sinon.stub().returns({ on: sinon.stub() })
    })
    markerWrapperStub.returns({
      setLngLat: setLngLatStub,
      addTo: addToStub,
      remove: removeStub,
      getLngLat: getLngLatStub
    })
    mapboxClientStub.returns({
      getDirection: sinon.stub().returns({ then: sinon.stub() })
    })
    store = createFakeStore({ state })
    return shallowMount(MainMap, { store })
  }

  it('should show the map', () => {
    const wrapper = init()

    expect(mapWrapperStub).to.have.been.called
    expect(wrapper.find('[data-test=map-container]').exists()).to.eql(true)
  })

  describe('handleClick', () => {
    it('places a marker to the map', () => {
      const wrapper = init()
      const fakeEvent = {
        lngLat: {
          lng: 12,
          lat: 23
        }
      }

      wrapper.vm.handleClick(fakeEvent)
      expect(wrapper.vm.isContextMenuVisible).to.be.false
      expect(setLngLatStub).to.have.been.called
      expect(addToStub).to.have.been.called
    })

    it('removes the previous marker', () => {
      const removeStub = sinon.stub()
      const state = {
        mapOptions: {},
        fromMarker: { remove: removeStub }
      }
      const wrapper = init(state)
      const fakeEvent = {
        lngLat: {
          lng: 12,
          lat: 23
        }
      }

      wrapper.vm.handleClick(fakeEvent)
      expect(removeStub).to.have.been.called
    })
  })

  describe('handleContextMenu', () => {
    it('shows the context menu', () => {
      const wrapper = init()
      const fakeEvent = {
        originalEvent: {
          pageX: 1,
          pageY: 2
        }
      }

      wrapper.vm.handleContextMenu(fakeEvent)
      expect(wrapper.vm.isContextMenuVisible).to.be.true
      expect(wrapper.vm.x).to.eql('1px')
      expect(wrapper.vm.y).to.eql('2px')
      expect(wrapper.vm.mapEvent).to.eql(fakeEvent)
    })
  })

  describe('handleMarked', () => {
    it('places a to marker to the map', () => {
      const wrapper = init()
      const fakeEvent = {
        lngLat: {
          lng: 1,
          lat: 2
        }
      }
      wrapper.vm.mapEvent = fakeEvent

      wrapper.vm.handleMarked()
      expect(wrapper.vm.isContextMenuVisible).to.be.false
      expect(setLngLatStub).to.have.been.called
      expect(addToStub).to.have.been.called
    })
  })
})
