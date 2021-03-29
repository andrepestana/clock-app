export interface ConfigStateInterface {
  prop: boolean,
  lang: string,
  backgroundColor: string,
  fontColor: string
}

function state (): ConfigStateInterface {
  return {
    prop: true,
    lang: 'pt-br',
    backgroundColor: '#ccc',
    fontColor: '#000'
  }
}

export default state
