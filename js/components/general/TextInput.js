import React from 'react'
import { connect } from 'react-redux'
import { saveAnswer, clearError, updateError } from '~/actions'
import { validationMapper } from '~/validation/validationMapper'

const mapDispatchToProps = dispatch => ({
    _saveAnswer: (name, value) => {
        dispatch(clearError())
        dispatch(saveAnswer(name, value))
    },
    _updateError: err => dispatch(updateError(err))
})

const mapStateToProps = state => ({
    error: state.error,
})

const hasError = (error, name) => error && error.id === name

const TextInput = ({ type, name, placeholder, error, _saveAnswer, _updateError, answer}) => {
    return (
        <div className="textInputWrapper" >
            <input 
                type={type} 
                className={`${error && error.id.includes(name) && "errorInput"} textInput`} 
                onChange={ev => {
                    const valError = validationMapper[ev.target.name]()
                    if(valError) {
                        _updateError(valError)
                        return
                    }
                    _saveAnswer(ev.target.name, ev.target.value)
                }}
                name={name} 
                placeholder={placeholder} 
                value={answer} 
            />
            {error && error.id.includes(name) && <div className="errorFieldMessage">{error.message}</div>}
        </div>
    )
} 

export default connect(mapStateToProps, mapDispatchToProps)(TextInput)