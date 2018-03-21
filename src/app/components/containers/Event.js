

import { connect } from 'react-redux'
import React from 'react'
import EventDetails from 'Presentational/EventDetails'
import { thunks } from 'Logic/actions/thunks'
import { Status } from 'Config/constants'
import { isEmpty } from 'Config/helper'
import Error from 'Presentational/Error'

var Spinner = require('react-spinkit');

let component = <Spinner name="pulse" />

class Event extends React.Component {
    componentWillMount() {
        if (!this.props.loading && isEmpty(this.props.event)) {
            this.props.loadEvent(this.props.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loading && nextProps.ready) {
            if (isEmpty(nextProps.event))
                component = <Error message='No se ha encontrado el evento'/>
            else
                component = <EventDetails 
                event={nextProps.event} 
                unpublish={() => nextProps.unpublishEvent(nextProps.event.id)} 
                publish={() => nextProps.publishEvent(nextProps.event.id)}
                cancel={() => nextProps.cancelEvent(nextProps.event.id)}/>
        }

        else if (this.props.loading && nextProps.failed) {
            component = <Error message='No se ha encontrado el evento'/>
        }
    }

    render() {
        return (
            <React.Fragment>
                {component}
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

export default connect(mapStateToProps, mapDispatchToProps)(Event)
