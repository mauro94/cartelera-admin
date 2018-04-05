import React from 'react'
import { AddUser, AddSucceeded, AddFailed } from 'Presentational/users/Add'
import { Status, UserActions } from 'Global/constants'
import { waitingOnAction, actionSucceded, actionFailed } from 'Containers/helper'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: { email: '' },
            waiting: false
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
    }
    handleAdd(email) {
        this.props.add(email)
        this.setState({
            user: { email: email }
        })
    }
    handleError() {
        this.setState({
            waiting: false
        })
        confirmAlert({
            customUI: ({ onClose }) =>
                <AddFailed
                    type={this.props.type}
                    user={this.state.user}
                    error='Ya existe un usuario registrado con este correo'
                    handleOk={onClose} />
        })
    }
    handleSuccess() {
        this.setState({
            waiting: false
        })
        confirmAlert({
            customUI: ({ onClose }) =>
                <AddSucceeded
                    type={this.props.type}
                    user={this.state.user}
                    handleOk={onClose} />
        })
    }
    componentWillReceiveProps(nextProps) {
        if (waitingOnAction(this.props, nextProps, UserActions.Create)) {
            this.setState({
                waiting: true
            })
        }
        else if (actionSucceded(this.state.waiting, nextProps, UserActions.Create)) {
            this.handleSuccess()
        }
        else if (actionFailed(this.state.waiting, nextProps, UserActions.Create)) {
            this.handleError()
        }
    }
    render() {
        return (
            <AddUser add={this.handleAdd} type={this.props.type} />
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.user.status == Status.WaitingOnServer,
        failed: state.user.status == Status.Failed,
        ready: state.user.status == Status.Ready,
        error: state.user.error,
        action: state.user.lastAction
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (email) => dispatch(thunks.user.create(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)