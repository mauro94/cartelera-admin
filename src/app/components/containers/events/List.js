import React from 'react'
import { connect } from 'react-redux'
import { parseEvents } from './helper'
import { Entity, EventActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import EventsList from 'Presentational/events/List'

class Events extends React.Component {
    componentDidMount() {
        if (Entity.isEmpty(parseEvents(this.props))) {
            this.props.getEvents()
        }
    }
    render() {
        return (
            <EventsList
                events={parseEvents(this.props)}
                reducer={{
                    status: this.props.event.status,
                    action: this.props.event.action,
                    error: this.props.event.error
                }}
                action={EventActions.All} />
        )
    }
}

const mapStateToProps = state => {
    return {
        event: state.event
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvents: () => {
            dispatch(thunks.event.all())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Events)
