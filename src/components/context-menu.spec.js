import { shallowMount } from '@vue/test-utils'
import ContextMenu from './context-menu.vue'

describe('ContextMenu.vue', () => {
  it('displays the context menu', () => {
    const wrapper = shallowMount(ContextMenu, {})

    expect(wrapper.find('[data-test=context-menu]').exists()).to.eql(true)
    expect(wrapper.find('[data-test=route-to]').text()).to.eql('Route to')
  })

  it('emits an event on click', () => {
    const wrapper = shallowMount(ContextMenu, {})
    wrapper.find('[data-test=route-to]').trigger('click')

    expect(wrapper.emitted()).to.have.property('marked')
  })
})
