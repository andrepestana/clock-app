import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ExampleStateInterface } from './state'

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  getProp (state) {
    return state.prop
  },
  getLang (state) {
    return state.lang
  }
}

export default getters
