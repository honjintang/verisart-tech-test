export const DEFAULT_STATE = []

const error = (state=null, action) => {
  switch (action.type) {
    case 'UPDATE_ERROR':
      return action.payload
    default:
      return state
  }
}

export default error