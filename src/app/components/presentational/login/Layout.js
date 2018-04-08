
import React from 'react'
import { Route } from "react-router-dom"
import LoginForm from 'Containers/Login'
import NewbieForm from './First'
import logo from 'Images/logo.svg'

const Login = () => (
    <div className="grid-container container-login">
        <div className="login-logo">
            <img className="logo" src={logo} />
        </div>
        <div className="login-form">
            <Route exact path="/login" component={LoginForm} />
            <Route path="/login/newbie" component={NewbieForm} />
        </div>
    </div>
)

export default Login