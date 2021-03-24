import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import { ExampleStateInterface } from './module-example/state'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  // TODO Change from Example to an appropriate name
  example: ExampleStateInterface;
}

export default function () {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  })

  return Store
}
