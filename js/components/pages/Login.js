import React from 'react'
import { connect } from 'react-redux'
import TextInput from '~/components/general/TextInput'
import Button from '~/components/general/Button'
import { login } from '~/actions'
import fb from '../../../assets/images/fb.svg'
import google from '../../../assets/images/google.svg'
import { getEmail, getPassword } from '~/reducers/auth'

const mapStateToProps = state => ({
    email: getEmail(state),
    password: getPassword(state),
})

const mapDispatchToProps = dispatch => ({
    _login: ({ email, password }) => dispatch(login({ email, password })),
  })

const Login = ({ _login, email, password }) => (
    <div>
        <div className="loginTitle">Login</div>
        <div className="loginBox">
            <div className="loginFormWrapper">
                <span></span>
                <div className="loginFormContent">
                    <div className="loginWithEmail">
                        <TextInput type="email" name="email" placeholder="Email" value={email} />
                        <div className="loginSpacing">
                            <TextInput type="password" name="password" placeholder="Enter Password" value={password}  />
                        </div>
                        <div className="loginFooter">
                            <Button text="Login" onClickFn={() => _login({ email, password })} />
                        </div>
                        <div className="forgotPasswordWrapper">
                            <a className="forgotPassword" href="/forgot-password">Forgot Password</a>
                        </div>
                        <div className="socialWrapper">
                            <div className="loginWithSocial">
                                <div className="loginWithSocialWrapper">
                                    <div className="loginSocialButton">
                                        <div className="loginSocialIcon">
                                            <img className="socialIcon" src={fb} width="22.5px" height="22.5px"/>
                                        </div>
                                        <div className="loginSocialLabel">
                                            Login with Facebook
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loginWithSocial">
                                <div className="loginWithSocialWrapper">
                                    <div className="loginSocialButton">
                                        <div className="loginSocialIcon">
                                            <img className="socialIcon" src={google} width="36px" height="36px" />
                                        </div>
                                        <div className="loginSocialLabel">
                                            Login with Google
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)