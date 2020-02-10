import { validateEmail } from './email'
import { validatePassword } from './password'

export const validationMapper = {
    email: validateEmail,
    password: validatePassword,
}