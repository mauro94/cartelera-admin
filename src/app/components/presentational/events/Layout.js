import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Edit as EditEvent } from 'Containers/events'
import AllEvents from './All'

import 'Style/eventsMenuLayout.scss';

const EventsIndex = () => (
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

export default EventsIndex