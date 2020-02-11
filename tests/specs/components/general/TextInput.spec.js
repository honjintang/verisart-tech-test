import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from '~/components/general/TextInput'

const mock_saveAnswer = jest.fn()
const mock_clearAnswer = jest.fn()

describe('components/display/TextInput', () => {
    it('matches snapshot when no error', () => {
        const component = shallow(<TextInput
             _saveAnswer={mock_saveAnswer} 
             _clearAnswer={mock_clearAnswer} 
             type='email'
             name='email'
             answer='lalala'
             placeholder='mockplaceholder'
              />)
        expect(component).toMatchSnapshot()
    })

    it('matches snapshot when error', () => {
        const component = shallow(<TextInput
             _saveAnswer={mock_saveAnswer} 
             _clearAnswer={mock_clearAnswer} 
             type='email'
             name='email'
             answer='lalala'
             placeholder='mockplaceholder'
             error={{ message: 'this is an error', id: 'email'}}
              />)
        expect(component).toMatchSnapshot()
    })
})