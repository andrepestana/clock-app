import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ConfigStateInterface } from './state'

const actions: ActionTree<ConfigStateInterface, StateInterface> = {
  setLang ({ commit }, lang: string) {
    commit('mutateLang', lang)
  },
  setBackgroundColor ({ commit }, backgroundColor: string) {
    commit('mutateBackgroundColor', backgroundColor)
  },

  setBackgroundImage ({ commit }, backgroundImage: string | null) {
    commit('mutateBackgroundImage', backgroundImage)
  },

  setFontColor ({ commit }, fontColor: string) {
    commit('mutateFontColor', fontColor)
  }
}

export default actions
