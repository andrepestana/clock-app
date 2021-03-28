import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ConfigStateInterface } from './state'

const actions: ActionTree<ConfigStateInterface, StateInterface> = {
  setLang ({ commit }, lang: string) {
    commit('mutateLang', lang)
  }
}

export default actions
