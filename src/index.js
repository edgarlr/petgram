import React from 'react'
import ReactDom from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'
import Context from './Context'
import { MyThemeProvider } from './ThemeContext'

const client = new ApolloClient({
  uri: 'https://petgram-server-edgarlr.edgarlr.now.sh/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/signup'
    }
  }
})

ReactDom.render(
  <Context.Provider value={{ isAuth: false }} >
    <ApolloProvider client={client} >
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </ApolloProvider>
  </Context.Provider>,
  document.querySelector('#app'))
