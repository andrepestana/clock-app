import { shallowMount } from '@vue/test-utils'
import ClassComponent from '../../../../src/components/ClassComponent.vue'

describe('ClassComponent.vue', () => {
  test('mounts without problem', () => {
    const $t = () => { }
    const wrapper = shallowMount(ClassComponent, {
      mocks: { $t }
    })
    expect(wrapper).toBeTruthy()
  })
})
