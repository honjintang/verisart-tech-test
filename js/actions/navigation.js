import { push } from 'connected-react-router'

export const redirect = destination => dispatch => {
    dispatch(push(destination))
  }
