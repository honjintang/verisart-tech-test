export const DEFAULT_STATE = {}

const dummy = (state=DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return state
    default:
      return state
  }
}

export default dummy