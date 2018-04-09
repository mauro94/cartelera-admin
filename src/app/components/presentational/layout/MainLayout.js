import React from 'react'
import { Switch } from 'react-router-dom'
import 'Style/gridMain.scss'
import 'Style/columnMenuLayout.scss'
import { UpcomingLink } from './Links'
import { DefaultRoute, EventsRoutes } from './Routes'

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
                    (link, index) =>
                        (<React.Fragment
                            key={'link-' + index}>
                            {link}
                        </React.Fragment>)
                )}
            </div>
        </div>
        <div className="container-content">
            <Switch>
                <React.Fragment>
                    <DefaultRoute />
                    {props.routes.map(
                        (route, index) =>
                            (<React.Fragment
                                key={'route-' + index}>
                                {route}
                            </React.Fragment>)
                    )}
                </React.Fragment>
            </Switch>
        </div>
    </div>
)

export default Layout