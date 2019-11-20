import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MainMap from '@/components/main-map.vue'

describe('MainMap.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MainMap, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
