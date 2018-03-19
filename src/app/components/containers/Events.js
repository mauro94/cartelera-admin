import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'
import { history, loggedIn } from 'Config/helper'
import { Status } from 'Config/constants'
import { EventsPage } from 'Presentational/EventsPage';
import { isEmpty } from 'Config/helper'
var Spinner = require('react-spinkit');

let component = <Spinner name="pulse" />

class Events extends React.Component {
    componentWillMount() {
        if (!this.props.loading && (!this.props.event || isEmpty(this.props.event.all))) {
            this.props.loadEvents()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loading && nextProps.ready) {
            if (!isEmpty(nextProps.events))
                component = <EventsPage />
        }
    }

    render() {
        return component
    }
}

const mapStateToProps = state => {
    return {
        events: state.event.all,
        loading: state.event.status == Status.WaitingOnServer,
        ready: state.event.status == Status.Ready
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadEvents: () => {
            dispatch(thunks.event.all())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Events)
