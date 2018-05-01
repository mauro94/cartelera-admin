import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'
import { default as EditEvent } from 'Presentational/events/Edit'
import { Entity, Format, EventActions } from 'Helpers/index'
import { getEventInitialValues } from 'Presentational/events/forms/helper'
import { ConfirmUpdate } from 'Presentational/events/modals'

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.action = EventActions.Get
        this.togglePublished = this.togglePublished.bind(this)
        this.handleConfirmCancel = this.handleConfirmCancel.bind(this)
        this.handleConfirmUpdate = this.handleConfirmUpdate.bind(this)
        this.textareaHandleChange = this.textareaHandleChange.bind(this)
        this.setTextarea = this.setTextarea.bind(this)
        this.state = { 
            textarea: {
                description: ''
            }
        }
    }
    componentDidMount() {
        if (Entity.isEmpty(this.props.event.show) || this.props.event.show.id != this.props.id) {
            this.action = EventActions.Get
            this.props.getEvent(this.props.id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.id != nextProps.id) {
            this.action = EventActions.Get
            this.props.getEvent(nextProps.id)
        }
    }

    setTextarea() {
        this.setState({
            textarea: {
                description: this.props.event.show.description || ''
            }
        })
    }

    handleConfirmUpdate(values) {
        let updatedEvent = { id: this.props.event.show.id }
        values.startDatetime = values.rangeDatetime.startDatetime
        values.endDatetime = values.rangeDatetime.endDatetime

        //Has capacity
        values.maxCapacity = (values.hasCapacity == false ? 0 : values.maxCapacity)

        for (var key in this.props.event.show) {
            if (values.hasOwnProperty(key)) {
                if (this.props.event.show[key] != values[key] && key != 'id') {
                    updatedEvent[key] = values[key]
                }
            }
        }
        this.action = EventActions.Update
        this.props.updateEvent(updatedEvent)
    }

    handleActionSucceeded() {
        if (this.action == EventActions.Get) {
            this.setTextarea()
        }
    }

    togglePublished() {
        this.action = EventActions.Update
        this.props.updateEvent({
            id: this.props.event.show.id,
            published: !this.props.event.show.published
        })
    }

    handleConfirmCancel(cancelMessage) {
        this.action = EventActions.Update
        this.props.updateEvent({
            id: this.props.event.show.id,
            cancelled: true,
            cancel_message: cancelMessage
        })
    }

    textareaHandleChange(e) {
        //validation here
        this.setState({
            textarea: {
                description: e.target.textContent
            }
        })
    }

    render() {
        return (
            <EditEvent
                action={this.action}
                event={this.props.event.show}
                textarea={this.state.textarea}
                textareaHandleChange={this.textareaHandleChange}
                togglePublished={this.togglePublished}
                modal={ConfirmUpdate}
                handleConfirmCancel={this.handleConfirmCancel}
                handleConfirmSubmit={this.handleConfirmUpdate}
                hide
                onSuccess={() => this.handleActionSucceeded()}
                reducer={{
                    status: this.props.event.status,
                    action: this.props.event.action,
                    error: this.props.event.error
                }}
                update={this.props.updateEvent}
            />
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
        getEvent: id => { dispatch(thunks.event.get(id)) },
        updateEvent: event => { dispatch(thunks.event.update(event)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit))
