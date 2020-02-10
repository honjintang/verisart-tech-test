import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    error: state.error
})

const TextInput = ({ type, name, placeholder, error }) => (
    <div className="textInputWrapper" >
        <input type={type} className={`${error && "errorInput"} textInput`} name={name} placeholder={placeholder} />
        {error && <div className="errorFieldMessage">{error.message}</div>}
    </div>
)

export default connect(mapStateToProps)(TextInput)