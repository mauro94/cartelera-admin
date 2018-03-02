import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withAuth } from 'Config/helper';
import Home from 'Containers/Home'
import 'Style/gridMain.scss';
import logo from 'Images/logo.svg';

const HomePage = ({ user, logout }) => (
    <React.Fragment>
        <div className="grid-container">
            <div className="container-navbar">
                <div className="container-navbar-logo">
                    <div className="navbar-logo">
                        <img className="logo" src={logo} />
                    </div>
                    <div className="user">
                    </div>
                </div>
                <div className="container-navbar-buttons">
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

export default withAuth(HomePage)

//<button onClick={logout}>logout</button>