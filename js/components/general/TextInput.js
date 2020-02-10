import React from 'react'
import { connect } from 'react-redux'
import { saveAnswer, clearError } from '~/actions'

const mapDispatchToProps = dispatch => ({
    _saveAnswer: (name, value) => {
        dispatch(clearError())
        dispatch(saveAnswer(name, value))
    },
})

const mapStateToProps = state => ({
    error: state.error,
})

const TextInput = ({ type, name, placeholder, error, _saveAnswer, answer}) => (
    <div className="textInputWrapper" >
        <input 
            type={type} 
            className={`${error && "errorInput"} textInput`} 
            onChange={ev => _saveAnswer(ev.target.name, ev.target.value)}
            name={name} 
            placeholder={placeholder} 
            value={answer} 
        />
        {error && <div className="errorFieldMessage">{error.message}</div>}
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(TextInput)