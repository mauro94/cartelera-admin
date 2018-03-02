import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link, Prompt, Switch } from "react-router-dom";
import Login from 'Containers/Login'
import FirstLogin from 'Containers/FirstLogin'
import logo from 'Images/logo.svg';

var additionalStyle = {
    display: 'grid',
    'align-content': 'center'
};

const LoginPage = () => (
    <Fragment>
        <div className="grid-container">
            <div className="item1">
                <img className="logo" src={logo} />
            </div>
            <div className="item2" style={additionalStyle}>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/newbie" component={FirstLogin}  />
            </div>
        </div>
    </Fragment>
)

export default LoginPage