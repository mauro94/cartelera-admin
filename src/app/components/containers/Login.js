import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { history, loggedIn } from 'Config/helper'
import { Status } from 'Config/constants'
import LoginForm from 'Presentational/LoginForm'

class Login extends React.Component {
    componentWillMount() {
        if (loggedIn()) {
            history.replace('/')
        }
    }

    render() {
        if (this.props.user.status == Status.WaitingOnServer)
            return <p>Loading...</p>
        return <LoginForm {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: loginAttempt => {
            dispatch(thunks.user.login(loginAttempt))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)