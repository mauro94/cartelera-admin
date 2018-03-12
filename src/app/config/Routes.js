import React from 'react'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom'
import { history } from 'Config/helper'
import Home from 'Containers/Home'
import LoginPage from 'Presentational/LoginPage'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/edit-profile" component={Home} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </Router>
)

export default Routes