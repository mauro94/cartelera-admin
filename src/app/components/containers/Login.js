import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { history, Session, Status, FormValidations } from 'Global/index'
import { BasicLogin as LoginForm } from 'Presentational/login/Form'

class Login extends React.Component {
    componentWillMount() {
        if (loggedIn() && !Session.isNewbie()) {
            history.replace('/dashboard')
        }
        else if (loggedIn() && Session.isNewbie()) {
            history.replace('/login/newbie')
        }
    }

    render() {
        require('Style/gridColumns2.scss');

        if (this.props.loading)
            return <p>Loading...</p>

        return (
            <LoginForm handleSubmit={this.props.handleSubmit} />
        )
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