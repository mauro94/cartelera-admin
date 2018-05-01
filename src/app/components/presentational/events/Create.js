import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { EventForm, EventFormNav, EventFormRoutes } from 'Presentational/events/forms'
import { withFeedback } from 'Containers/hoc'

const NewEvent = (props) => (
    <Router>
        <React.Fragment>
            <div className='title'>
                <div className="event-top-container">
                    <h1>Evento nuevo</h1>
                </div>
            </div>
            <div className='edit-event-container'>
                <EventFormNav />
                <EventForm
                    {...props}>
                    <EventFormRoutes />
                </EventForm>
            </div>
        </React.Fragment>
    </Router>
)

export default withFeedback(NewEvent)
