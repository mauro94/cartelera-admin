
import { connect } from 'react-redux'
import React from 'react'
import EventDetails from 'Presentational/EventDetails'

const mapStateToProps = (state, { ...props }) => {
    return {
        event: { id: (props.id ? props.id : "does not exist"), name: (props.id ? "" : 'Event name')}
    }
}

const Event = connect(
    mapStateToProps
)(EventDetails)

export default Event
