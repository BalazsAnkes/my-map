import { shallowMount } from '@vue/test-utils'
import MainMap from './main-map.vue'
import MapWrapper from '@/lib/map-wrapper'
import createFakeStore from '../../tests/unit/helper'

describe('MainMap.vue', () => {
  let mapWrapperStub
  let store

  beforeEach(() => {
    mapWrapperStub = sinon.stub(MapWrapper, 'create').returns({
      init: sinon.stub()
    })
    store = createFakeStore({ state: { map: {} } })
  })

  it('should show the map', () => {
    const wrapper = shallowMount(MainMap, { store })

    expect(mapWrapperStub).to.have.been.called
    expect(wrapper.find('[data-test=map-container]').exists()).to.eql(true)
  })
})
