export const DEFAULT_STATE = null

const error = (state=null, action) => {
  switch (action.type) {
    case 'UPDATE_ERROR':
      return action.payload
    case 'CLEAR_ERROR':
      return DEFAULT_STATE
    default:
      return state
  }
}

export default error