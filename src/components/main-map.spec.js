import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MainMap from '@/components/main-map.vue'
import MapWrapper from '@/lib/map-wrapper'

describe('MainMap.vue', () => {
  let mapWrapperStub

  beforeEach(() => {
    mapWrapperStub = sinon.stub(MapWrapper, 'create').returns({
      init: sinon.stub()
    })
  })

  it('should show the map', () => {
    const wrapper = shallowMount(MainMap, {})

    // /* eslint-disable no-unused-expressions */
    expect(mapWrapperStub).to.have.been.called
    expect(wrapper.find('[data-test=map-container]').exists()).to.eql(true)
  })
})
