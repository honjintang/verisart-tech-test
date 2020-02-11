import { validateEmail } from '~/validation/email'

describe('validateEmail', () => {
    describe('when email is valid', () => {
        it('returns null', () => {
            expect(validateEmail('a@a.com')).toBe(null)
        })
    })

    describe('when email is not valid', () => {
        it('returns error with message and id', () => {
            expect(validateEmail('a')).toEqual({id: "email", message: "invalid email address"})
        })
    })
})