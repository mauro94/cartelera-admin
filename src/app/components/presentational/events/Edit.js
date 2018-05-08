import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { load } from 'Containers/hoc'
import { Format } from './helper'
import { getEventInitialValues } from 'Presentational/events/forms/helper'
import {
    EventForm,
    EventFormNav,
    Actions as EventFormActions,
    EventFormRoutes
} from 'Presentational/events/forms'

const EventsEdit = (props) => {
    let event = getEventInitialValues(props.event)

    return (
        <Router>
            <React.Fragment>
                <div className='title'>
                    <div className="top-container">
                        <h1>{props.event.name}</h1>
                        {<EventFormActions {...props} />}
                    </div>
                </div>
                <div className='edit-event-container'>
                    <EventFormNav
                        edit
                        showRegistrees={props.event.hasRegistration}
                        id={props.event.id} />
                    <EventForm
                        {...props}
                        event={event}
                        edit id={props.event.id} >
                        <EventFormRoutes />
                    </EventForm>
                </div>
            </React.Fragment>
        </Router>
    )
}

export default load('event', EventsEdit)
