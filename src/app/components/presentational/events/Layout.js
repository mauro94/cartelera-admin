import React from 'react'
import { Route } from 'react-router-dom'
import AllEvents from './All'
import {
    Edit as EditEvent,
    Create as CreateEvent
} from 'Containers/events'
import 'Style/eventsMenuLayout.scss'

const EventsLayout = () => (
    <React.Fragment>
        <Route
            exact
            path='/eventos'
            render={() => <AllEvents />} />
        <Route
            path='/eventos/nuevo'
            render={() => <CreateEvent />} />
        <Route
            path='/eventos/:id/editar'
            render={({ match }) => <EditEvent id={match.params.id} />} />
    </React.Fragment>
)

export default EventsLayout