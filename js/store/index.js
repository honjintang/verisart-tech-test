import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from '~/reducers'

export const history = createBrowserHistory()

const routermw = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  connectRouter(history)(rootReducer(history)),
  composeEnhancers(applyMiddleware(
    thunk,
    routermw
  ))
)
