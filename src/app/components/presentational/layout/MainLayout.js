import React from 'react'

import 'Style/gridMain.scss'
import 'Style/columnMenuLayout.scss'
import logo from 'Images/logo.svg'

import { UpcomingLink } from './Links'

export const Layout = ({ props }) => (
    <div className="grid-container container-home">
        <div className="container-navbar">
            <div className="container-navbar-logo">
                <div className="navbar-logo">
                    <UpcomingLink />
                </div>
                <div className="user">{props.title}</div>
            </div>
            <div className="container-navbar-buttons">
                {props.links.map(
                    link => <React.Fragment>{link}</React.Fragment>
                )}
            </div>
        </div>
        <div className="container-content">
            {props.routes.map(
                route => <React.Fragment>{route}</React.Fragment>
            )}
        </div>
    </div>
)

export default Layout