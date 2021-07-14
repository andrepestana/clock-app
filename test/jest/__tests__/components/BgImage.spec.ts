import Vue from 'vue'
import { mountFactory } from '@quasar/quasar-app-extension-testing-unit-jest'
import BgImage from '../../../../src/components/BgImage.vue'
import { QBtn } from 'quasar'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import store from '../../../../src/store/'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)
const _store = store()

describe('BgImage.vue', () => {
  test('mounts without problem', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const $t = () => {}
    const wrapper = mountFactory(BgImage, {
      quasar: {
        components: { }
      },
      mount: {
        mocks: { $t },
        store: _store
      }
    })()
    expect(wrapper).toBeTruthy()
    expect(wrapper.vm.$data.url).toBeNull()
  })
  test('emits newBgImage when button is clicked', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const $t = () => {}
    const wrapper = mountFactory(BgImage, {
      quasar: {
        components: { }
      },
      mount: {
        mocks: { $t },
        store: _store
      }
    })()
    expect(wrapper.emitted('newBgImage')).toBeUndefined()
    // eslint-disable-next-line
    wrapper.find('#changeBgImage').trigger('click')
    await Vue.nextTick()
    expect(wrapper.vm.$data.url).toContain('https://placeimg.com/500/300/nature?t=')
    expect(wrapper.emitted('newBgImage')).not.toBeNull()
  })
})
