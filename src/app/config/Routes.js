import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from 'Helpers/index'
import { Main, withAuth } from 'Containers/'
import { LoginLayout } from 'Presentational/login'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={withAuth(Main)} />
            <Route path="/dashboard" component={withAuth(Main)} />
            <Route path="/login" component={LoginLayout} />
        </Switch>
    </Router>
)

export default Routes