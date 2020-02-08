import React from 'react'
import Container from 'react-bootstrap/Container'
import VerisartLogo from '../../assets/images/verisartLogo.svg'

export const App = () => (
        <div className="app">
            <div className="head">
                <div className="gdprBanner">
                    We use cookies to improve your user experience on our site. By using Verisart you agree to our 
                    <a href="/privacy"> cookies and privacy policy</a>. Got it.
                </div>
                <div className="nav">
                    <div className="logoWrapper">
                        <a href="/"><img className="logo" src={VerisartLogo}></img></a>
                    </div>
                    <nav className='navBar'>
                            <div className="navOption"><a href="/news">news</a></div>
                            <div className="navOption"><a href="/partners">partners</a></div>
                            <div className="navOption"><a href="/join">join</a></div>
                            <div className="navOption"><a href="/login">log in</a></div>
                    </nav>
                </div>
            </div>
            <div className="main">
                <div className="certificate">Cert</div>
                <div className="files">Files</div>
                <div className="history">History</div>
            </div>
            <div className="footer">footer</div>
        </div>
    )

export default App