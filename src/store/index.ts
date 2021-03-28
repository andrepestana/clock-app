import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import config from './module-config'
import { ConfigStateInterface } from './module-config/state'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  config: ConfigStateInterface;
}

const vuexPersist = new VuexPersist({
  key: 'clockApp',
  storage: window.localStorage
})

export default function () {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      config
    },
    plugins: [vuexPersist.plugin],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  })

  return Store
}
