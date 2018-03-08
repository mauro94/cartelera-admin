import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { history, loggedIn, isCurrentUserNewbie } from 'Config/helper'
import { Status } from 'Config/constants'
import LoginForm from 'Presentational/LoginForm'

class Login extends React.Component {
    componentWillMount() {
        if (loggedIn() && !isCurrentUserNewbie()) {
            history.replace('/')
        }
        else if (loggedIn() && isCurrentUserNewbie()) {
            history.replace('/login/newbie')
        }
    }

    render() {
        if (this.props.loading)
            return <p>Loading...</p>
        return <LoginForm {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        error: state.user.error,
        loading: state.user.status == Status.WaitingOnServer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (loginAttempt, setErrors) => {
            dispatch(thunks.user.login(loginAttempt, setErrors))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)