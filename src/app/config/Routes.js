import React from 'react'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom'
import { history, withAuth } from 'Config/helper'
import Home from 'Containers/Home'
import { Index as LoginLayout } from 'Presentational/login/Index'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={withAuth(Home)} />
            <Route path="/dashboard" component={withAuth(Home)} />
            <Route path="/login" component={LoginLayout} />
        </Switch>
    </Router>
)

export default Routes