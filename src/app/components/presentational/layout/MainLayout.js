import React from 'react'
import { Switch } from 'react-router-dom'
import 'Style/gridMain.scss'
import { UpcomingLink } from './Links'
import { DefaultRoute, EventsRoutes } from './Routes'

export const Layout = props => (
    <div className='container'>
        <div className='navbar'>
            {props.links.map(
                (link, index) =>
                    (<div
                        key={'link-' + index}>
                        {link}
                    </div>)
            )}
        </div>
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
)

export default Layout