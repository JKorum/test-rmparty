export declare namespace Characters {
  export interface Item {
    id: string
    name: string
    image: string
  }
  export interface Data {
    characters: { results: Item[] }
  }
  export interface Bindings {
    name: string
  }
}
