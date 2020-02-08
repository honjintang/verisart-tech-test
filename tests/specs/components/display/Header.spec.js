import React from 'react'
import { shallow } from 'enzyme'
import Header from '~/components/display/Header'

describe('components/display/Header', () => {
    it('matches snapshot', () => {
        const component = shallow(<Header />)
        expect(component).toMatchSnapshot()
    })
})