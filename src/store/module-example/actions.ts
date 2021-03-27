import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ExampleStateInterface } from './state'

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  setLang ({ commit }, lang: string) {
    commit('mutateLang', lang)
  }
}

export default actions
