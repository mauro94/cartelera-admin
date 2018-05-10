import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { GenericServerCallActions, Status } from 'Helpers/index'
import Recovery, { RecoverySucceeded, RecoveryFailed } from 'Presentational/login/Recover'
import { ModalAlert } from 'Presentational/elements'
import 'Style/gridColumns2.scss'

class RecoverPassword extends React.Component {
    constructor(props) {
        super(props)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
    }
    handleError() {
        ModalAlert({
            modal: RecoveryFailed,
            error: this.props.genericServerCall.error
        })
    }
    handleSuccess() {
        ModalAlert({
            modal: RecoverySucceeded
        })
    }
    render() {
        return (
            <Recovery 
            action={GenericServerCallActions.PasswordReset}
            reducer={{
                status: this.props.genericServerCall.status,
                action: this.props.genericServerCall.action,
                error: this.props.genericServerCall.error
            }}
            onSuccess={this.handleSuccess}
            onError={this.handleError} 
            handleSubmit={this.props.handleSubmit}/>
        )
    }
}

const mapStateToProps = state => {
    return { 
        genericServerCall : state.genericServerCall
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (resetAttempt) => {
            dispatch(thunks.user.resetPassword(resetAttempt))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword)