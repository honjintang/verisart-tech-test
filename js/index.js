import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from '~/components/display/Header'
import App from '~/components/App'

ReactDOM.render(
  <Provider store={store}>
      <Header />
      <App />
  </Provider>,
  document.getElementById('app'),
)
