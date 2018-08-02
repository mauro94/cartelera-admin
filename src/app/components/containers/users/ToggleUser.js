import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ModalAlert } from 'Presentational/elements'
import ToggleUser, { ToggleSucceeded, ToggleFailed, ToggleConfirm } from 'Presentational/users/Toggle'
import { UserActions } from 'Helpers/constants'

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
    }
    handleConfirm(userToToggle) {
        ModalAlert({
            modal: ToggleConfirm,
            user: userToToggle,
            toggle: this.handleToggle
        })
    }
    handleToggle(userToToggle) {
        userToToggle.enabled = !userToToggle.enabled
        this.userToToggle = userToToggle
        this.props.update(userToToggle)
    }
    handleError() {
        ModalAlert({
            modal: ToggleFailed,
            user: this.userToToggle,
            error: this.props.user.error
        })
    }
    handleSuccess() {
        ModalAlert({
            modal: ToggleSucceeded,
            user: this.props.userToToggle
        })
    }
    render() {
        return (
            <ToggleUser
                confirm={this.handleConfirm}
                action={UserActions.Update}
                reducer={{
                    status: this.props.user.status,
                    action: this.props.user.action,
                    error: this.props.user.error
                }}
                user={this.props.userToToggle}
                onSuccess={this.handleSuccess}
                onError={this.handleError} />
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
        update: user => {
            dispatch(thunks.user.update(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)