import React from 'react'

const EventDetails = ({ event }) => {
    return (
        <p>Event {event.id} : {event.name} </p>
    )
}
export default EventDetails