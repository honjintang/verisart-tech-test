import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import error from './error'

const rootReducer = history => combineReducers(
  { auth, error, router: connectRouter(history) }
)

export default rootReducer