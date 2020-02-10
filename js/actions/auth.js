import { updateError, redirect } from '~/actions'

export const saveAnswer = (id, value) => ({
    type: 'SAVE_ANSWER',
    payload: value,
    meta: id,
})

const mockRequest = (url, {email, password}) => {
    if( email === 'admin@admin.com' && password === 'admin') {
        return Promise.resolve({ certNumber: 'abc', authkey: '123'})
    } else {
        return Promise.reject({ message: 'incorrect login details'})
    }
    
}

export const login = ({email, password}) => async dispatch  => {
    try {
        const { certNumber, authkey } = await mockRequest('mockurl', {email, password})
        dispatch(saveAnswer('authKey', authkey))
        dispatch(redirect(`/certificate/${certNumber}`))
    } catch(err) {
        dispatch(updateError(err))
    }
}
