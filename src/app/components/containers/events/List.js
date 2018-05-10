import React from 'react'
import { connect } from 'react-redux'
import { getEventsType } from './helper'
import { Entity, EventActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import EventsList from 'Presentational/events/List'

class Events extends React.Component {
    constructor() {
        super()
        this.handleChangeEventsPage = this.handleChangeEventsPage.bind(this)
    }
    componentWillMount() {
        if (Entity.isEmpty(this.props.event.all) ||
            this.props.event.filter != getEventsType(this.props.query)) {
            this.props.getEvents(getEventsType(this.props.query), 1)
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.query != nextProps.query) {
            this.props.getEvents(getEventsType(nextProps.query), 1)
        }
    }
    handleChangeEventsPage(page) {
        if (page <= this.props.event.totalPages && page > 0) {
            this.props.getEvents(this.props.event.filter, page)
        }
    }
    render() {
        return (
            <EventsList
                changeEventsPage={this.handleChangeEventsPage}
                currentPage={this.props.event.currentPage}
                events={this.props.event.all}
                upcoming={getEventsType(this.props.query) == 'upcoming'}
                hide
                totalPages={this.props.event.totalPages}
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
        getEvents: (filter, page) => {
            dispatch(thunks.event.all(filter, page))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Events)
