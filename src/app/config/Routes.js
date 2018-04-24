import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from 'Helpers/index'
import { MainLayout, withAuth } from 'Containers/index'
import { LoginLayout } from 'Presentational/login'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route path="/login" component={LoginLayout} />
            <Route path="/" component={withAuth(MainLayout)} />
        </Switch>
    </Router>
)

export default Routes