

import { connect } from 'react-redux'
import React from 'react'
import EventsEdit from 'Presentational/events/Edit'
import { thunks } from 'Logic/actions/thunks'
import { Format, Status } from 'Helpers/index'
import Error from 'Presentational/elements/Error'

var Spinner = require('react-spinkit');

class EventDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            component: <Spinner name="pulse" />
        }
    }
    componentWillMount() {
        if (!this.props.loading && Format.empty(this.props.event)) {
            this.props.loadEvent(this.props.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loading && nextProps.ready) {
            if (Format.empty(nextProps.event))
                this.setState({
                    component: <Error message='No se ha encontrado el evento' />
                })
            else
                this.setState({
                    component: <EventsEdit
                        event={nextProps.event}
                        unpublish={() => nextProps.unpublishEvent(nextProps.event.id)}
                        publish={() => nextProps.publishEvent(nextProps.event.id)}
                        cancel={() => nextProps.cancelEvent(nextProps.event.id)} />
                })
        }

        else if (this.props.loading && nextProps.failed) {
            this.setState({
                component: <Error message='No se ha encontrado el evento' />
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.component}
            </React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        event: state.event.current,
        loading: state.event.status == Status.WaitingOnServer,
        ready: state.event.status == Status.Ready,
        failed: state.event.status == Status.Failed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadEvent: id => { dispatch(thunks.event.get(id)) },
        unpublishEvent: id => { dispatch(thunks.event.unpublish(id)) },
        publishEvent: id => { dispatch(thunks.event.publish(id)) },
        cancelEvent: id => { dispatch(thunks.event.cancel(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail)
