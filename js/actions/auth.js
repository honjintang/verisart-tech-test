import { updateError } from '~/actions'

const mockRequest = ({email, password}) => {
    if( email === 'admin@admin.com' && password === 'admin') {
        return Promise.resolve({ certNumber: 'abc', authkey: '123'})
    }
    return Promise.reject({ message: 'incorrect login details'})
}

export const login = ({email, password}) => async dispatch  => {
    try {
        const { certNumber, authkey } = await mockRequest('mockurl', {email, login})
        dispatch(updateAuth(authkey))
        dispatch(redirect(`/certificate/${certNumber}`))
    } catch(err) {
        dispatch(updateError(err))
    }
}