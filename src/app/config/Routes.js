import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history, withAuth } from 'Config/helper'
import Main from 'Containers/Main'
import LoginIndex from 'Presentational/login/Index'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={withAuth(Main)} />
            <Route path="/dashboard" component={withAuth(Main)} />
            <Route path="/login" component={LoginIndex} />
        </Switch>
    </Router>
)

export default Routes