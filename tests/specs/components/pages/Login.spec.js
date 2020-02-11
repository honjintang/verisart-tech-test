import React from 'react'
import { shallow } from 'enzyme'
import { Login } from '~/components/pages/Login'

const mockLogin = jest.fn()

describe('components/display/Login', () => {
    it('matches snapshot', () => {
        const component = shallow(<Login _login={mockLogin} email='email' password='password' />)
        expect(component).toMatchSnapshot()
    })
})