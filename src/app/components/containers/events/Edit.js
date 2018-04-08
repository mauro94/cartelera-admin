import React from 'react'
import { connect } from 'react-redux'
import { actionSucceded, actionFailed } from 'Containers/helper'
import { Entity, Status, EventActions } from 'Helpers/index'
import { thunks } from 'Logic/actions/thunks'
import Error from 'Presentational/elements/Error'
import { default as EditEvent } from 'Presentational/events/Edit'
import Spinner from 'react-spinkit'

class Edit extends React.Component {
    constructor() {
        super()
        this.state = {
            component: <Spinner name="pulse" />,
            waiting: false
        }
    }
    componentWillMount() {
        if (!Entity.isEmpty(this.props.event)) {
            this.setState({
                waiting: false,
                component: <EditEvent
                    event={this.props.event}
                    update={this.props.update} />,
            })
        }
        else if (!this.state.waiting) {
            this.props.getEvent(this.props.id)
            this.setState({
                waiting: true
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (actionSucceded(this.state.waiting, nextProps, EventActions.Get)) {
            this.setState({
                component:
                    <EditEvent
                        event={nextProps.event}
                        update={this.props.update} />,
                waiting: false
            })
        }
        else if (actionFailed(this.state.waiting, nextProps, EventActions.Get)) {
            this.setState({
                component: <Error message='No se ha encontrado el evento' />,
                waiting: false
            })
        }
    }

    render() {
        return this.state.component
    }
}

const mapStateToProps = state => {
    return {
        event: state.event.show,
        loading: state.event.status == Status.WaitingOnServer,
        ready: state.event.status == Status.Ready,
        action: state.event.action,
        error: state.event.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvent: id => { dispatch(thunks.event.get(id)) },
        updateEvent: event => { dispatch(thunks.event.update(event)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
