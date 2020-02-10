import React from 'react'

const Button = ({ text, onClickFn }) => (
    <button className="loginButton" onClick={onClickFn}>{text}</button>
)

export default Button