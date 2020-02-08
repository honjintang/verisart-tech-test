import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import Header from '~/components/display/Header'
import Login from '~/components/pages/Login'
import Certificate from '~/components/pages/Certificate'

ReactDOM.render(
  <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/works/:certNumber" component={Certificate} />
          <Route exact path="/login" component={Login} />
        </Switch> 
      </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
)
