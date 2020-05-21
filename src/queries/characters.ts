import { gql } from 'apollo-boost'

export const CUSTOM = gql`
  query Characters($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`
export const DEFAULT = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`
