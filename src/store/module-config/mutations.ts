import { MutationTree } from 'vuex'
import { ConfigStateInterface } from './state'

const mutation: MutationTree<ConfigStateInterface> = {
  mutateLang (state: ConfigStateInterface, lang: string) {
    state.lang = lang
  },
  mutateBackgroundColor (state: ConfigStateInterface, backgroundColor: string) {
    state.backgroundColor = backgroundColor
  },
  mutateFontColor (state: ConfigStateInterface, fontColor: string) {
    state.fontColor = fontColor
  }
}

export default mutation
