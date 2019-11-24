import { shallowMount } from '@vue/test-utils'
import MainMap from './main-map.vue'
import MapWrapper from '@/lib/map-wrapper'
import MarkerWrapper from '@/lib/marker-wrapper'
import createFakeStore from '../../tests/unit/helper'

describe('MainMap.vue', () => {
  let mapWrapperStub = sinon.stub(MapWrapper, 'create')
  let markerWrapperStub = sinon.stub(MarkerWrapper, 'create')
  let setLngLatStub
  let addToStub
  let store

  const init = () => {
    setLngLatStub = sinon.stub().returnsThis()
    addToStub = sinon.stub()
    mapWrapperStub.returns({
      initMap: sinon.stub().returns({ on: sinon.stub() })
    })
    markerWrapperStub.returns({
      setLngLat: setLngLatStub,
      addTo: addToStub
    })
    store = createFakeStore({ state: { map: {} } })
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
    })
  })
})
