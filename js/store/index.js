import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '~/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer(history),
  composeEnhancers()
)

export default store