import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ExampleStateInterface } from './state'

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  getProp (state) {
    return state.prop
  }
}

export default getters
