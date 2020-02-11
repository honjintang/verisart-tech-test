import { updateError, redirect, login } from '~/actions'
import { push } from 'connected-react-router'

jest.mock('connected-react-router', () => ({
    push: jest.fn()
}))

describe('login thunk action', () => {
    let email
    let password
    let mockDispatch = jest.fn()
    describe('when successful login', () => {
        beforeEach(() => {
            email = 'admin@admin.com'
            password = 'admin'
        })

        it('saveAnswer action is dispatched with authkey', async () => {
            await login({ email, password })(mockDispatch)
            expect(mockDispatch.mock.calls[0][0]).toEqual({"meta": "authKey", "payload": "123", "type": "SAVE_ANSWER"})
        })

        it('redirect action is dispatched with redirecturl', async() => {
            mockDispatch.mockImplementation(fn => {
                if(typeof fn === 'function') {
                    return fn()
                }
            })
            await login({ email, password })(mockDispatch)
            expect(push).toHaveBeenCalledWith("/works/f7dc6685-d4a0-403d-ab1c-46b9c8ffb4b3")
        })
    })

    describe('when unsuccessful login', () => {
        beforeEach(() => {
            email = 'lalala@admin.com'
            password = 'admiaaan'
        })

        it('updateError action is dispatched with error', async () => {
            await login({ email, password })(mockDispatch)
            expect(mockDispatch).toHaveBeenCalledWith({"payload": {"id": "email, password", "message": "incorrect login details"}, "type": "UPDATE_ERROR"})
        })
    })
})