import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { categoryList, campusList } from 'Config/Test'
import { thunks } from 'Logic/actions/thunks'
import { default as EditEvent } from 'Presentational/events/Edit'
import { Entity, Format, EventActions } from 'Helpers/index';

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.action = EventActions.Get
        this.togglePublished = this.togglePublished.bind(this)
        this.handleConfirmCancel = this.handleConfirmCancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.textareaHandleChange = this.textareaHandleChange.bind(this)
        this.setTextarea = this.setTextarea.bind(this)
        this.state = {
            textarea: {
                description: ''
            }
        }
    }
    componentDidMount() {
        if (Entity.isEmpty(this.props.event.show) || this.props.event.show.id != this.props.id)
            this.props.getEvent(this.props.id)
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.id != nextProps.id) {
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

    handleSubmit(values) {
        let updatedEvent = { id: this.props.event.show.id }
        Format.typeCast(values)
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
                campusList={campusList}
                categoryList={categoryList}
                event={this.props.event.show}
                textarea={this.state.textarea}
                textareaHandleChange={this.textareaHandleChange}
                handleSubmit={this.handleSubmit}
                togglePublished={this.togglePublished}
                handleConfirmCancel={this.handleConfirmCancel}
                hide
                onSuccess={() => this.setTextarea()}
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
