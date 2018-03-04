import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link, Prompt, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { isEmpty } from 'Config/helper';
import {Sponsor} from 'Containers/Home'

import 'Style/gridMain.scss';
import logo from 'Images/logo.svg';

const HomePage = ({...props}) => (
    <React.Fragment>
        <div className="grid-container">
            <div className="container-navbar">
                <div className="container-navbar-logo">
                    <div className="navbar-logo">
                        <img className="logo" src={logo} />
                    </div>
                    <div className="user">
                        { props.userType }
                    </div>
                </div>
                <div className="container-navbar-buttons">
                    {props.sponsorsButton != null && <props.sponsorsButton user={props.user} />}
                    {props.categoriesButton != null && <props.categoriesButton user={props.user} />}
                    <props.eventsButton user={props.user} />
                    <props.profileButton user={props.user} logout={props.logout} />
                </div>
            </div>
            <div className="container-content">

            </div>
        </div>
    </React.Fragment>
)

HomePage.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
}

export default HomePage