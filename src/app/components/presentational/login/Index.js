import React, { Fragment } from 'react'
import { Route, IndexRoute } from "react-router-dom"
import Login from 'Containers/Login'
import FirstLogin from 'Containers/FirstLogin'
import logo from 'Images/logo.svg'

const Index = () => (
    <div className="grid-container container-login">
        <div className="login-logo">
            <img className="logo" src={logo} />
        </div>
        <div className="login-form">
            <Route exact path="/login" component={Login} />
            <Route path="/login/newbie" component={FirstLogin} />
        </div>
    </div>
)

export default Index