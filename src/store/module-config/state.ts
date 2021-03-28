export interface ConfigStateInterface {
  prop: boolean,
  lang: string
}

function state (): ConfigStateInterface {
  return {
    prop: true,
    lang: 'pt-br'
  }
}

export default state
