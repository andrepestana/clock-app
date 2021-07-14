import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ConfigStateInterface } from './state'

const getters: GetterTree<ConfigStateInterface, StateInterface> = {
  getProp (state) {
    return state.prop
  },
  getLang (state) {
    return state.lang
  },
  getBackgroundColor (state) {
    return state.backgroundColor
  },
  getBackgroundImage (state) {
    return state.backgroundImage
  },
  getFontColor (state) {
    return state.fontColor
  }
}

export default getters
