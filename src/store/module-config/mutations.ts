import { MutationTree } from 'vuex'
import { ConfigStateInterface } from './state'

const mutation: MutationTree<ConfigStateInterface> = {
  mutateLang (state: ConfigStateInterface, lang: string) {
    state.lang = lang
  }
}

export default mutation
