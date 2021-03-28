import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ConfigStateInterface } from './state'

const getters: GetterTree<ConfigStateInterface, StateInterface> = {
  getProp (state) {
    return state.prop
  },
  getLang (state) {
    return state.lang
  }
}

export default getters
