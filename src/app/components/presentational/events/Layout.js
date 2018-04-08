import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import AllEvents from './All'
import { Edit as EditEvent } from 'Containers/events'

import 'Style/eventsMenuLayout.scss';

const EventsLayout = () => (
    <Switch>
        <Route
            exact
            path='/eventos'
            render={() => <AllEvents />} />
        <Route
            path='/eventos/:id/editar'
            render={({ match }) => <EditEvent id={match.params.id} />} />
    </Switch>
)

export default EventsLayout