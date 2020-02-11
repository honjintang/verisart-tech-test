import React from 'react'
import { shallow } from 'enzyme'
import Button from '~/components/general/Button'

const mockOnClick = jest.fn()

describe('components/display/Button', () => {
    it('matches snapshot', () => {
        const component = shallow(<Button onClickFn={mockOnClick} text='hello' />)
        expect(component).toMatchSnapshot()
    })
})