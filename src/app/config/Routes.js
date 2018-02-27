import React from 'react'
import {
    Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { history } from 'Config/helper'
import App from 'Containers/App'
import FirstLogin from 'Containers/FirstLogin'
import LoginPage from 'Presentational/LoginPage'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={LoginPage} />
            <Route path="/newbie" component={FirstLogin} />
        </Switch>
    </Router>
)

export default Routes