import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'
import { Status } from 'Global/constants'
import EventsList from 'Presentational/events/List'
var Spinner = require('react-spinkit')

class Events extends React.Component {
    constructor() {
        super()
        this.state = {
            component: <div className="spinner"><Spinner name="pulse" /></div>
        }
    }
    componentWillMount() {
        if (!this.props.loading && (!this.props.event || this.props.event.all.empty())) {
            this.props.loadEvents()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loading && nextProps.ready) {
            if (!nextProps.events.empty())
                this.setState({
                    component: <EventsList {...nextProps} />
                })
        }
    }

    render() {
        return this.state.component
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
