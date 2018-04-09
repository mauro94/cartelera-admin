import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AllEvents from './All'
import { Edit as EditEvent } from 'Containers/events'

import 'Style/eventsMenuLayout.scss';

const EventsLayout = () => (
    <React.Fragment>
        <Route
            exact
            path='/eventos'
            render={() => <AllEvents />} />
        <Route
            path='/eventos/:id/editar'
            render={({ match }) => <EditEvent id={match.params.id} />} />
    </React.Fragment>
)

export default EventsLayout