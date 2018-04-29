import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { categoryList, campusList } from 'Config/Test'
import { thunks } from 'Logic/actions/thunks'
import CreateEvent from 'Presentational/events/Create'
import { Entity, EventActions, history } from 'Helpers/index'

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
        this.props.createEvent(values)
    }

    //{"errors":{"applicant_id":["can't be blank"],"sponsor_id":["can't be blank"],"category_id":["can't be blank"],"sponsor":["must exist"],"applicant":["must exist"],"category":["must exist"]}}

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
