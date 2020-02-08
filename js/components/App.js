import React from 'react'
import Header from '~/components/display/Header'

export const App = () => (
        <div className="app">
            <Header />
            <div className="main">
                <div className="certificate">Cert</div>
                <div className="files">Files</div>
                <div className="history">History</div>
            </div>
            <div className="footer">footer</div>
        </div>
    )

export default App