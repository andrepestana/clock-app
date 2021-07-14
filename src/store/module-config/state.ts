export interface ConfigStateInterface {
  prop: boolean,
  lang: string,
  backgroundColor: string,
  backgroundImage: string | null,
  fontColor: string
}

function state (): ConfigStateInterface {
  return {
    prop: true,
    lang: 'pt-br',
    backgroundColor: '#ccc',
    fontColor: '#000',
    backgroundImage: null
  }
}

export default state
