import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { ModalAlert } from 'Presentational/elements'
import AddUser, { AddSucceeded, AddFailed } from 'Presentational/users/Add'
import { UserActions } from 'Helpers/constants'

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
    }
    handleAdd(email) {
        this.setState({
            email: email
        })
        this.props.add({ email: email, type: this.props.type })
    }
    handleError() {
        ModalAlert({
            modal: AddFailed,
            type: this.props.type,
            user: this.state.email,
            error: this.props.user.error
        })
    }
    handleSuccess() {
        ModalAlert({
            modal: AddSucceeded, type: this.props.type,
            user: this.props.user.show
        })
    }
    render() {
        return <AddUser
            add={this.handleAdd}
            action={UserActions.Create}
            reducer={{
                status: this.props.user.status,
                action: this.props.user.action,
                error: this.props.user.error
            }}
            type={this.props.type}
            user={this.props.user.show}
            onSuccess={this.handleSuccess}
            onError={this.handleError} />
    }
}

const mapStateToProps = (state) => {
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