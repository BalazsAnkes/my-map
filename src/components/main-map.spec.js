import { shallowMount } from '@vue/test-utils'
import MainMap from './main-map.vue'
import MapWrapper from '@/lib/map-wrapper'
import createFakeStore from '../../tests/unit/helper'

describe('MainMap.vue', () => {
  let mapWrapperStub = sinon.stub(MapWrapper, 'create')
  let store

  const init = () => {
    mapWrapperStub.returns({
      initMap: sinon.stub().returns({ on: sinon.stub() })
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
    const wrapper = init()

    wrapper.vm.handleClick()
    expect(wrapper.vm.isContextMenuVisible).to.be.false
  })

  describe('handleContextMenu', () => {
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
