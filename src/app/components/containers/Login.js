import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import LoginForm from 'Presentational/LoginForm'

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: loginAttempt => {
            dispatch(thunks.session.login(loginAttempt))
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default Login