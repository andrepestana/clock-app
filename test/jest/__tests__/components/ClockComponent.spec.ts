import { mountFactory } from '@quasar/quasar-app-extension-testing-unit-jest'
import ClockComponent from '../../../../src/components/ClockComponent.vue'
import { QBtn } from 'quasar'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import store from '../../../../src/store/'

const localVue = createLocalVue()
localVue.use(Vuex)
const _store = store()

describe('ClassComponent.vue', () => {
  // beforeEach(() => {
  //   jest.setTimeout(5000)
  // })
  test('mounts without problem', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const $t = () => {}
    const wrapper = mountFactory(ClockComponent, {
      quasar: {
        components: { QBtn }
      },
      mount: {
        mocks: { $t },
        store: _store
      }
    })()
    expect(wrapper).toBeTruthy()
    expect(wrapper.vm.$data.currentTime).toBeDefined()
    expect(wrapper.vm.$data.currentTime).not.toBe('')
  })
})
