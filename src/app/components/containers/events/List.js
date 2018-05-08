import React from 'react'
import { connect } from 'react-redux'
import { getEventsType } from './helper'
import { Entity, EventActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import EventsList from 'Presentational/events/List'

class Events extends React.Component {
    componentWillMount() {
        if (Entity.isEmpty(this.props.event.all) ||
            this.props.event.filter != getEventsType(this.props.query)) {
            this.props.getEvents(getEventsType(this.props.query))
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.query != nextProps.query) {
            this.props.getEvents(getEventsType(nextProps.query))
        }
    }
    render() {
        return (
            <EventsList
                events={this.props.event.all}
                upcoming={getEventsType(this.props.query) == 'upcoming'}
                hide
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
        getEvents: (filter) => {
            dispatch(thunks.event.all(filter))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Events)
