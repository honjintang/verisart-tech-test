import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '~/store'
import Login from '~/components/pages/Login'
import Certificate from '~/components/pages/Certificate'

export const App = () => (
    <div className="page">
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/works/:certNumber" component={Certificate} />
                <Route exact path="/login" component={Login} />
            </Switch> 
        </ConnectedRouter>
    </div>
)

export default App