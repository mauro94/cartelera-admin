import React from 'react'
import Event from 'Containers/Event'

const EventPage = (ownProps) => (
    <Event id={ownProps.match.params.id}/>
)

export default EventPage