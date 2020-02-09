import React from 'react'
import fb from '../../../assets/images/fb.svg'
import google from '../../../assets/images/google.svg'

const Login = () => (
    <div>
        <div className="loginTitle">Login</div>
        <div className="loginBox">
            <div className="loginFormWrapper">
                <span></span>
                <div className="loginFormContent">
                    <div className="loginWithEmail">
                        <div className="textInputWrapper">
                            <input type="email" className="textInput" name="email" placeholder="Email" />
                        </div>
                        <div className="loginSpacing">
                            <div className="textInputWrapper">
                                <input type="password" className="textInput" name="password" placeholder="Enter Password" />
                            </div>
                        </div>
                        <div className="loginFooter">
                            <button className="loginButton">Login</button>
                        </div>
                        <div className="forgotPasswordWrapper">
                            <a className="forgotPassword" href="/forgot-password">Forgot Password</a>
                        </div>
                        <div className="loginWithSocial">
                            <div className="loginWithSocialWrapper">
                                <div className="loginSocialButton">
                                    <div className="loginSocialIcon">
                                        <img className="socialIcon" src={fb} width="36px" height="36px" />
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
)

export default Login