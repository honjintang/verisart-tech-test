export const DEFAULT_STATE = { 
  email: 'ehlloo',
  password: null,
  authKey: null,
}

const auth = (state=DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SAVE_ANSWER':
      return {
        ...state,
        [action.meta]: action.payload,
      } 
    default:
      return state
  }
}

export default auth

export const getEmail = state => state.auth.email
export const getPassword = state => state.auth.password