import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { SApp } from './components/App'

import './styles/normalize.css'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SApp />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
