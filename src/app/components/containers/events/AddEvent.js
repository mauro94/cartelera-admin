import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { thunks } from 'Logic/actions/thunks'
import CreateEvent from 'Presentational/events/Create'
import { Entity, EventActions, history } from 'Helpers/index'
import { ConfirmCreate } from 'Presentational/events/modals'

class Create extends React.Component {
    constructor() {
        super()
        this.state = {
            textarea: {
                description: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.textareaHandleChange = this.textareaHandleChange.bind(this)
        this.eventCreatedSuccessfully = this.eventCreatedSuccessfully.bind(this)
    }
    componentDidMount() {
        this.setState({
            textarea: {
                description: ''
            }
        })
    }

    handleSubmit(values) {
        values.sponsorId = this.props.currentUser.show.id
        values.applicantId = this.props.currentUser.show.id
        values.startDatetime = values.rangeDatetime.startDatetime
        values.endDatetime = values.rangeDatetime.endDatetime
        delete values.rangeDatetime
        this.props.createEvent(values)
    }

    textareaHandleChange(e) {
        //validation here
        this.setState({
            textarea: {
                description: e.target.textContent
            }
        })
    }

    eventCreatedSuccessfully() {
        history.push(`/eventos/${this.props.event.show.id}/editar`)
    }

    render() {
        return (
            <CreateEvent
                action={EventActions.Create}
                textarea={this.state.textarea}
                textareaHandleChange={this.textareaHandleChange}
                handleConfirmSubmit={this.handleSubmit}
                modal={ConfirmCreate}
                onSuccess={() => this.eventCreatedSuccessfully()}
                reducer={{
                    status: this.props.event.status,
                    action: this.props.event.action,
                    error: this.props.event.error
                }}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        event: state.event
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createEvent: event => { dispatch(thunks.event.create(event)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Create))
