import { MutationTree } from 'vuex'
import { ExampleStateInterface } from './state'

const mutation: MutationTree<ExampleStateInterface> = {
  mutateLang (state: ExampleStateInterface, lang: string) {
    state.lang = lang
  }
}

export default mutation
