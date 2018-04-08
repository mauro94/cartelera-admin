import React from 'react'

import 'Style/gridMain.scss'
import 'Style/columnMenuLayout.scss'
import { UpcomingLink } from './Links'

export const Layout = props => (
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
                    (link, index) => <React.Fragment key={'link-' + index}>{link}</React.Fragment>
                )}
            </div>
        </div>
        <div className="container-content">
            {props.routes.map(
                (route, index) => <React.Fragment key={'route-' + index}>{route}</React.Fragment>
            )}
        </div>
    </div>
)

export default Layout