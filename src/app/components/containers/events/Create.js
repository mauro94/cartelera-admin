import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { categoryList, campusList } from 'Config/Test'
import { thunks } from 'Logic/actions/thunks'
import CreateEvent from 'Presentational/events/Create'
import { Entity, EventActions, history } from 'Helpers/index';

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
                campusList={campusList}
                categoryList={categoryList}
                textarea={this.state.textarea}
                textareaHandleChange={this.textareaHandleChange}
                handleSubmit={this.handleSubmit}
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
        event: state.event
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createEvent: event => { dispatch(thunks.event.create(event)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Create))
