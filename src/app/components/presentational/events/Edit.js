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
    event = {
        ...event,
        rangeDatetime: Format.toRange(props.event.startDatetime,
            props.event.endDatetime),
        publicEvent: Format.toggle(props.event.publicEvent) || 'off',
        petFriendly: Format.toggle(props.event.petFriendly) || 'off',
        hasRegistration: Format.toggle(props.event.hasRegistration) || '',
        hasDeadline: Format.toggle(props.event.hasDeadline) || '',
    }

    return (
        <Router>
            <React.Fragment>
                <div className='title'>
                    <div className="event-top-container">
                        <h1>{props.event.name}</h1>
                        {<EventFormActions {...props} />}
                    </div>
                </div>
                <div className='edit-event-container'>
                    <EventFormNav
                        edit
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
