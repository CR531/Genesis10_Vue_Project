import { shallowMount } from '@vue/test-utils'
import Page from '@/components/Page.vue'

describe('Page.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Page, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
