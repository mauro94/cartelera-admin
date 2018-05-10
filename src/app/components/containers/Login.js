import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { history, Session } from 'Helpers/index'
import { BasicLogin as LoginForm } from 'Presentational/login/Form'
import 'Style/gridColumns2.scss'

class Login extends React.Component {
    componentWillMount() {
        if (Session.exists() && !Session.isNewbie()) {
            history.replace('/dashboard')
        }
        else if (Session.exists() && Session.isNewbie()) {
            history.replace('/login/newbie')
        }
    }

    render() {
        return (
                <LoginForm handleSubmit={this.props.handleSubmit} error={this.props.error}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.currentUser.error && state.currentUser.error.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (loginAttempt) => {
            dispatch(thunks.user.login(loginAttempt))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)