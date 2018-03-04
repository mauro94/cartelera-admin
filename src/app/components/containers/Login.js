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
            history.replace('/newbie')
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
        handleSubmit: (loginAttempt, setErrors) => {
            dispatch(thunks.user.login(loginAttempt, setErrors))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)