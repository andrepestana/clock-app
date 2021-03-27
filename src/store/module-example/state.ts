export interface ExampleStateInterface {
  prop: boolean,
  lang: string
}

function state (): ExampleStateInterface {
  return {
    prop: true,
    lang: 'pt-br'
  }
}

export default state
