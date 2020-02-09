import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from '~/components/pages/Login'
import Certificate from '~/components/pages/Certificate'

export const App = () => (
    <div className="page">
        <BrowserRouter>
            <Switch>
                <Route exact path="/works/:certNumber" component={Certificate} />
                <Route exact path="/login" component={Login} />
            </Switch> 
        </BrowserRouter>
    </div>
)

export default App