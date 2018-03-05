import React, { Fragment } from 'react'
import { Route, IndexRoute } from "react-router-dom"
import Login from 'Containers/Login'
import FirstLogin from 'Containers/FirstLogin'
import logo from 'Images/logo.svg'

const LoginPage = () => (
    <div className="grid-container container-login">
        <div className="item1">
            <img className="logo" src={logo} />
        </div>
        <div className="item2">
            <Route exact path="/login" component={Login} />
            <Route path="/login/newbie" component={FirstLogin} />
        </div>
    </div>
)

export default LoginPage