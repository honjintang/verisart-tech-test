import { validatePassword} from '~/validation/password'

describe('validatePassword', () => {
    describe('when password is valid', () => {
        it('returns null', () => {
            expect(validatePassword('asdfssdf')).toBe(null)
        })
    })

    describe('when password is not valid', () => {
        it('returns error with message and id', () => {
            expect(validatePassword('asdf')).toEqual({id: "password", message: "Password must be 8 characters long"})
        })
    })
})