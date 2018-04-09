import React from 'react'
import { AddUser, AddSucceeded, AddFailed } from 'Presentational/users/Add'
import { Status, UserActions } from 'Helpers/constants'
import { waitingOnAction, actionSucceded, actionFailed } from 'Containers/helper'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.waiting = false
        this.handleAdd = this.handleAdd.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
    }
    handleAdd(email) {
        this.props.add(email)
    }
    handleError() {
        this.waiting = false
        confirmAlert({
            customUI: ({ onClose }) =>
                <AddFailed
                    type={this.props.query}
                    user={this.props.user.show}
                    error='Ya existe un usuario registrado con este correo'
                    handleOk={onClose} />
        })
    }
    handleSuccess() {
        this.waiting = false
        confirmAlert({
            customUI: ({ onClose }) =>
                <AddSucceeded
                    type={this.props.query}
                    user={this.props.user.show}
                    handleOk={onClose} />
        })
    }
    componentWillReceiveProps(nextProps) {
        let status = {
            wasWaiting: this.waiting,
            reducer: {
                status: nextProps.user.status,
                action: nextProps.user.action,
                error: nextProps.user.error
            },
            action: UserActions.Create
        }
        if (waitingOnAction(status)) {
            this.waiting = true
        }
        else if (actionSucceded(status)) {
            this.handleSuccess()
        }
        else if (actionFailed(status)) {
            this.handleError()
        }
    }
    render() {
        return (
            <AddUser add={this.handleAdd} type={this.props.query} />
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (email) => dispatch(thunks.user.create(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)