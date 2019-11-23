import { shallowMount } from '@vue/test-utils'
import ContextMenu from './context-menu.vue'

describe('ContextMenu.vue', () => {
  it('displays the context menu', () => {
    const wrapper = shallowMount(ContextMenu, {})

    expect(wrapper.find('[data-test=context-menu]').exists()).to.eql(true)
    expect(wrapper.findAll('li').at(0).text()).to.eql('From')
    expect(wrapper.findAll('li').at(1).text()).to.eql('To')
  })
})
